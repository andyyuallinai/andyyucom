interface Env {
  GEMINI_API_KEY: string;
  DB: any;
}

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  zh: "Simplified Chinese",
  zt: "Traditional Chinese",
  ar: "Arabic",
  de: "German",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  ja: "Japanese",
  ko: "Korean",
  ms: "Malay (Bahasa Melayu)",
  ru: "Russian",
  th: "Thai",
  vi: "Vietnamese",
};

type TranslateRequestBody = {
  articleId?: string;
  text?: string;
  targetLang?: string;
};

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const sha256 = async (text: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
};

const getTranslatedText = (data: any): string | null => {
  const firstCandidate = data?.candidates?.[0];
  const parts = firstCandidate?.content?.parts;
  if (!Array.isArray(parts)) return null;

  const combined = parts
    .map((part: { text?: string }) => part?.text || "")
    .join("")
    .trim();

  return combined || null;
};

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = (await context.request.json()) as TranslateRequestBody;
    const articleId = body.articleId?.trim() || "default";
    const text = body.text?.trim() || "";
    const targetLang = body.targetLang;

    if (!text || !targetLang || !(targetLang in LANGUAGE_NAMES)) {
      return jsonResponse(400, { error: "Invalid payload" });
    }

    if (targetLang === "zh") {
      return jsonResponse(200, { translatedText: text, source: "passthrough" });
    }

    const sourceHash = await sha256(text);

    const cached = await context.env.DB.prepare(
      `SELECT translated_text
       FROM translations
       WHERE article_id = ?1 AND source_hash = ?2 AND target_lang = ?3
       LIMIT 1`
    )
      .bind(articleId, sourceHash, targetLang)
      .first<{ translated_text: string }>();

    if (cached?.translated_text) {
      return jsonResponse(200, {
        translatedText: cached.translated_text,
        source: "d1-cache",
      });
    }

    if (!context.env.GEMINI_API_KEY) {
      return jsonResponse(500, { error: "Missing GEMINI_API_KEY secret" });
    }

    const prompt = `Translate the following markdown text to ${LANGUAGE_NAMES[targetLang]}.
Maintain original markdown formatting (headings, lists, emphasis, tables, links).
Do not add any commentary. Return translated markdown only.

Text:
${text}`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${context.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      return jsonResponse(502, {
        error: "Gemini API call failed",
        details: errorText,
      });
    }

    const geminiData = await geminiResponse.json();
    const translatedText = getTranslatedText(geminiData);

    if (!translatedText) {
      return jsonResponse(502, { error: "Gemini returned empty response" });
    }

    await context.env.DB.prepare(
      `INSERT INTO translations (
        article_id,
        source_lang,
        target_lang,
        source_hash,
        translated_text
      ) VALUES (?1, 'zh', ?2, ?3, ?4)
      ON CONFLICT(article_id, source_hash, target_lang)
      DO UPDATE SET
        translated_text = excluded.translated_text,
        updated_at = CURRENT_TIMESTAMP`
    )
      .bind(articleId, targetLang, sourceHash, translatedText)
      .run();

    return jsonResponse(200, { translatedText, source: "gemini" });
  } catch (error) {
    console.error("Translate API error:", error);
    return jsonResponse(500, { error: "Internal server error" });
  }
};
