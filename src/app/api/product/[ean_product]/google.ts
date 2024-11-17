import axios, { AxiosError } from "axios";

interface GoogleAPIResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}
interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
interface Pagemap {
  cse_thumbnail?: Csethumbnail[];
  metatags: Metatag[];
  cse_image: Cseimage[];
  listitem?: Listitem[];
  offer?: Offer[];
  product?: Product[];
  brand?: Brand[];
  hproduct?: Hproduct[];
}
interface Hproduct {
  fn: string;
  description: string;
  photo: string;
  currency: string;
  currency_iso4217: string;
}
interface Brand {
  name: string;
  url: string;
}
interface Product {
  image: string;
  name?: string;
  description?: string;
  sku?: string;
  url?: string;
}
interface Offer {
  pricecurrency?: string;
  price?: string;
  availability?: string;
  itemcondition?: string;
  name?: string;
}
interface Listitem {
  item?: string;
  name: string;
  position: string;
}
interface Cseimage {
  src: string;
}
interface Metatag {
  "apple-itunes-app"?: string;
  "og:image"?: string;
  "og:type"?: string;
  viewport: string;
  "csrf-token"?: string;
  "og:title"?: string;
  "csrf-param"?: string;
  "og:url"?: string;
  "google-play-app"?: string;
  "og:description"?: string;
  "og:price:currency"?: string;
  "product:retailer_item_id"?: string;
  "kdt:page"?: string;
  "kdt:product"?: string;
  "product:item_group_id"?: string;
  "format-detection"?: string;
  "og:site_name"?: string;
  "msapplication-tilecolor"?: string;
  country?: string;
  copyright?: string;
  "theme-color"?: string;
  author?: string;
  "vtex-version"?: string;
  language?: string;
  currency?: string;
  abstract?: string;
  "msapplication-tileimage"?: string;
  "twitter:card"?: string;
  "og:image:alt"?: string;
  "og:image:width"?: string;
  "og:image:height"?: string;
  "og:image:type"?: string;
  "twitter:creator"?: string;
  "msapplication-square150x150logo"?: string;
  "next-head-count"?: string;
  "twitter:site"?: string;
  "apple-mobile-web-app-capable"?: string;
  "apple-mobile-web-app-title"?: string;
  google?: string;
  title?: string;
  "twitter:title"?: string;
  "og:availability"?: string;
  "twitter:url"?: string;
  "twitter:image"?: string;
  "og:brand"?: string;
  "twitter:description"?: string;
  "twitter:domain"?: string;
  "twitter:label1"?: string;
  "twitter:label2"?: string;
  "twitter:data1"?: string;
  "twitter:data2"?: string;
  "og:locale"?: string;
}
interface Csethumbnail {
  src: string;
  width: string;
  height: string;
}
interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
interface Context {
  title: string;
}
interface Queries {
  request: Request[];
  nextPage: Request[];
}
interface Request {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
interface Url {
  type: string;
  template: string;
}
async function GetProductData(
  search: string
): Promise<GoogleAPIResponse | void | any> {
  const google_key = process.env.GOOGLE_USER_KEY;
  const custom_search = process.env.CUSTOM_SEARCH_KEY;
  const responses = "10";

  const url = `https://www.googleapis.com/customsearch/v1?key=${google_key}&cx=${custom_search}&num=${responses}&q=${search}`;
  console.log(url)

  const response = await axios
    .get<GoogleAPIResponse>(url)
    .then((response) => response)
    .catch((e: AxiosError) => {
      console.error(e.message);
    });

    return response
}

export { GetProductData };
export type { GoogleAPIResponse };
