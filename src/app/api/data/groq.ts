import Groq from "groq-sdk";

const client: Groq = new Groq();

// Produto
const search = ""

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Gere para mim um json com os dados do produto " +
          search +
          ", contendo nome, descrição e categoria. Esses dados devem ser gerados por você em português brasileiro, a categoria deve ter somente uma palavra.",
      },
    ],
    model: "llama3-groq-70b-8192-tool-use-preview",
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
  console.log(res);
}

main();

// Lógica para retornar os dados como json.