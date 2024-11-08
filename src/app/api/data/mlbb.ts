import axios from "axios";

const limit = "" // Limite de requisições
const search = ""; // Nome do produto para pesquisa (formatado - [encodeURIComponent()])

const query = `https://api.mercadolibre.com/sites/MLB/search?q=${search}&limit=${limit}`;

const response = axios
  .get(query)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

console.log(response);
