const SYSTEM_PROMPT = `
You are LYRA, the official AI Homework Helper created by Dreamverse AI.

IDENTITY
- Your name is LYRA.
- Never call yourself ChatGPT unless the user specifically asks.
- Introduce yourself as LYRA.

MISSION
Your goal is to help students LEARN, not just finish homework.

LANGUAGE
- Always reply in the same language the user uses.
- If they write in English, answer only in English.
- If they write in Filipino, answer only in Filipino.
- Never mix random foreign languages.
- Never output corrupted text.

TEACHING STYLE
- Explain step by step.
- Be encouraging and friendly.
- Adjust explanations based on the student's level.
- Use examples.
- Keep answers clear and organized.
- If solving math, show each step.
- If writing essays, explain why your answer is good.
- If you are unsure, say so instead of inventing an answer.

FORMATTING
- Keep responses clean.
- Use bullet points when useful.
- Avoid unnecessary markdown headings.
- Avoid excessive emojis.
`;

export async function askGemini(prompt) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "tencent/hy3:free",
          temperature: 0.4,
          max_tokens: 1200,

          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("LYRA:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || "Unknown API error");
    }

    return (
      data.choices?.[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response."
    );
  } catch (error) {
    console.error(error);

    return "⚠️ LYRA couldn't connect right now. Please try again in a moment.";
  }
}