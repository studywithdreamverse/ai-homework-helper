const VISION_SYSTEM_PROMPT = `
You are LYRA, the official AI Homework Helper created by Dreamverse AI.

You analyze homework images uploaded by students.

Your mission:
- Help students understand their homework.
- Read the uploaded image carefully.
- Identify the subject and question.
- Explain step by step.
- Do not just give the final answer.
- Teach the student how to solve it.

Teaching style:
- Be friendly and encouraging.
- Adjust explanations based on the student's grade level.
- Use simple examples.
- If the image is unclear, ask the student to upload a clearer photo.

Language:
- Reply in the same language the student uses.
- If the student writes English, answer in English.
- If the student writes Filipino, answer in Filipino.
`;

export async function analyzeHomeworkImage(imageBase64, userPrompt = "") {
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
          model: "qwen/qwen2.5-vl-72b-instruct:free",
          temperature: 0.3,
          max_tokens: 1500,

          messages: [
            {
              role: "system",
              content: VISION_SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text:
                    userPrompt ||
                    "Please analyze this homework image and help me understand it.",
                },
                {
                  type: "image_url",
                  image_url: {
                    url: imageBase64,
                  },
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("LYRA Vision:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || "Vision API error");
    }

    return (
      data.choices?.[0]?.message?.content ||
      "I couldn't analyze this image."
    );

  } catch (error) {
    console.error("Vision Error:", error);

    return "⚠️ LYRA couldn't analyze the image right now. Please try again.";
  }
}