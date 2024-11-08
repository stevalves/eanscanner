import axios from "axios";

const google_key = process.env.GOOGLE_USER_KEY;
const custom_search = process.env.CUSTOM_SEARCH_KEY;
// const search_type = "&searchType=image";
const responses = "3";
const search = "17896003739333";

const query = `https://www.googleapis.com/customsearch/v1?key=${google_key}&cx=${custom_search}&num=${responses}&q=produto+${search}`;

const response = axios
  .get(query)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

console.log(response);
