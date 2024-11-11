import axios, { AxiosError } from "axios";

interface GoogleAPIResponse {
  kind: string;
  url: URL;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

export interface Context {
  title: string;
}

export interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: Image;
}

export interface Image {
  contextLink: string;
  height: number;
  width: number;
  byteSize: number;
  thumbnailLink: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
}

export interface Queries {
  request: NextPage[];
  nextPage: NextPage[];
}

export interface NextPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
  searchType: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface URL {
  type: string;
  template: string;
}

async function GetProductData(search: string) {
  // Important Queries
  const google_key = process.env.GOOGLE_USER_KEY;
  const custom_search = process.env.CUSTOM_SEARCH_KEY;
  // const search_type = "&searchType=image";
  const responses = "3";

  const url = `https://www.googleapis.com/customsearch/v1?key=${google_key}&cx=${custom_search}&num=${responses}&q=produto+${search}`;

  axios
    .get<GoogleAPIResponse>(url)
    .then((response) => {
      return response;
    })
    .catch((e: AxiosError) => {
      console.error(e.message);
    });
}

export { GetProductData }; 
export type { GoogleAPIResponse };

