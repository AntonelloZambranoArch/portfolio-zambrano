const PAGE_URL = "https://antonellozambranoarch.vercel.app/";
const json = (body, status = 200) => Response.json(body, { status });

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ success: false, message: "Richiesta non consentita." }, 403);
  }
  let input;
  try { input = await request.json(); }
  catch { return json({ success: false, message: "Dati non validi." }, 400); }
  const fields = {};
  for (const [key, limit] of [["name", 150], ["email", 254], ["subject", 200], ["message", 10000]]) {
    if (typeof input?.[key] !== "string" || !input[key].trim() || input[key].length > limit) {
      return json({ success: false, message: "Controlla i campi del modulo." }, 400);
    }
    fields[key] = input[key].trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.subject + fields.email)) {
    return json({ success: false, message: "Controlla l’indirizzo email e l’oggetto." }, 400);
  }
  try {
    const response = await fetch("https://formsubmit.co/ajax/anto.zambrano@virgilio.it", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Referer: PAGE_URL },
      body: JSON.stringify({ ...fields, _subject: `Sito web — ${fields.subject}`, _replyto: fields.email, _template: "table", _captcha: "false", _url: `${PAGE_URL}#contatti` }),
      signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => null);
    if (response.ok && String(data?.success) === "true") {
      return json({ success: true });
    }
    const needsActivation = /activat|actived/i.test(data?.message || "");
    return json({ success: false, code: needsActivation ? "ACTIVATION_REQUIRED" : "DELIVERY_UNAVAILABLE", message: needsActivation ? "Il modulo è in attesa di attivazione. Puoi inviare lo stesso messaggio tramite email o WhatsApp qui sotto." : "Il servizio di invio non è disponibile. Puoi inviare lo stesso messaggio tramite email o WhatsApp qui sotto." }, 503);
  } catch {
    return json({ success: false, message: "Non è stato possibile confermare l’invio. Puoi usare email o WhatsApp qui sotto." }, 503);
  }
}
