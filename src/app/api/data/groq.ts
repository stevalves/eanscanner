import Groq from "groq-sdk";

const client: Groq = new Groq();

async function ensureIsTheSameProduct(
  p1: string,
  p2: string
): Promise<boolean> {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `O produto ${p1} corresponde ao mesmo produto ${p2}? responsa em json como chave product true ou false`,
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    response_format: {
      type: "json_object",
    },
    stop: null,
  });

  const res = chatCompletion.choices[0].message.content;
  return JSON.parse(res!).product;
}

async function ensureProductIsValid(name: string): Promise<boolean> {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `${name} entra na categoria produto? responsa em json como chave product true ou false`,
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    response_format: {
      type: "json_object",
    },
    stop: null,
  });

  const res: string | null = chatCompletion.choices[0].message.content;
  return JSON.parse(res!).product;
}

async function generateJSON(
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

export { ensureProductIsValid, generateJSON, ensureIsTheSameProduct };
