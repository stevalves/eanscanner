import Groq from "groq-sdk";

const client: Groq = new Groq();

export async function generateJSON(
  name: string
): Promise<{ name: string; description: string; category: string }> {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Gere para mim um json com os dados do produto ${name}, contendo name, description e category. Esses dados devem ser gerados por você em português brasileiro, a categoria deve ter somente uma palavra.`,
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 0.65,
    stream: false,
    response_format: {
      type: "json_object",
    },
    stop: null,
  });

  const res = chatCompletion.choices[0].message.content;
  return JSON.parse(res!);
}