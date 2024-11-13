import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export interface Root {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
  pdp_tracking: PdpTracking;
  user_context: any;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id?: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: any;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: any;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  attributes: Attribute[];
  installments?: Installments;
  winner_item_id: any;
  catalog_listing: boolean;
  discounts: any;
  decorations: any;
  promotions: any[];
  inventory_id?: string;
}

export interface SalePrice {
  price_id: string;
  amount: number;
  conditions: Conditions;
  currency_id: string;
  exchange_rate: any;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: any;
  type: string;
  metadata: Metadata;
}

export interface Conditions {
  eligible: boolean;
  context_restrictions: any[];
  start_time: any;
  end_time: any;
}

export interface Metadata {}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: any;
  promise: any;
  shipping_score: number;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct?: ValueStruct;
  values: Value[];
  source: number;
  value_type: string;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface Value {
  id?: string;
  name: string;
  struct?: Struct;
  source: number;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
  metadata: Metadata2;
}

export interface Metadata2 {
  meliplus_installments: boolean;
  additional_bank_interest: boolean;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}

export interface Value3 {
  id: string;
  name: string;
  results: number;
}

export interface PdpTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

function App() {
  const search = "coca cola 2l"; // Nome do produto para pesquisa (formatado - [encodeURIComponent()])
  const limit = "&limit=5"; // Limite de requisições
  const format = "&sale_format=1359391"; // Formato de venda 1359391, id dos produtos unitários

  const query = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(search)}${limit}${format}`;
  const [res, setRes] = useState<AxiosResponse<Root>>();

  useEffect(() => {
    axios
      .get<Root>(query)
      .then((res) => setRes(res))
      .catch((e: AxiosError) => console.error(e.message));
  }, []);

  console.log(res);

  return (
    <div>
      <h1>{res?.data.results[0].title}</h1>
      <h1>R${Number(res?.data.results[0].price).toFixed(2)}</h1>
      <h1>{limit} resultados:</h1>
      <ul>
        {res?.data.results.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <h1>média de preço = </h1>
    </div>
  );
}

export default App;

// Interfaces já definidas e retorno +- feito, falta fazer outra verificação para ver se o produto é realmente o que está informado na query de pesquisa.
// Uma solução é fazer um loop em todos os produtos que o mercado libre retorna e verificar se o nome é o mesmo ou semelhante ao que está na query de pesquisa.
// Se for, adicionar o preço produto ao array de produtos que foram encontrados.
// funcão para pegar a média seria:

// interface Produto {
//   id: string;
//   price: number;
// }
// const produtosEncontrados: Produto[] = [];
// const media =
//   produtosEncontrados.reduce((acc, current) => acc + current.price, 0) /
//   produtosEncontrados.length;
