interface Env {
  GEMINI_API_KEY?: string;
  DB?: any;
}

type HealthCheckResult = {
  ok: boolean;
  detail?: string;
};

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const checkD1 = async (env: Env): Promise<HealthCheckResult> => {
  if (!env.DB) {
    return { ok: false, detail: "D1 binding `DB` is missing" };
  }

  try {
    await env.DB.prepare("SELECT 1 as ok").first();
    return { ok: true };
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown D1 error";
    return { ok: false, detail };
  }
};

const checkGeminiSecret = (env: Env): HealthCheckResult => {
  if (!env.GEMINI_API_KEY) {
    return { ok: false, detail: "Missing GEMINI_API_KEY secret" };
  }
  return { ok: true };
};

export const onRequestGet = async (context: { env: Env }) => {
  const d1 = await checkD1(context.env);
  const geminiSecret = checkGeminiSecret(context.env);
  const ok = d1.ok && geminiSecret.ok;

  return jsonResponse(ok ? 200 : 503, {
    ok,
    service: "andyyuuk-personal",
    timestamp: new Date().toISOString(),
    checks: {
      d1,
      geminiSecret,
    },
  });
};
