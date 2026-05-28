type TranslatePayload = {
  articleId: string;
  text: string;
  targetLang: "en" | "zh";
};

export const translateContent = async ({
  articleId,
  text,
  targetLang,
}: TranslatePayload): Promise<string> => {
  try {
    if (targetLang === "zh") return text;

    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleId,
        text,
        targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error(`Translation API failed: ${response.status}`);
    }

    const data = (await response.json()) as { translatedText?: string };
    return data.translatedText || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};
