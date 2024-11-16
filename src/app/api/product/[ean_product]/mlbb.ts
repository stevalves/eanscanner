import axios, { AxiosError, AxiosResponse } from "axios";

export interface MlbbResponse {
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

export async function getAttributesAndAvPrice(search: string) {
  const limit = "&limit=3"; // Limite de requisições
  const format = "&sale_format=1359391"; // Formato de venda 1359391, id dos produtos unitários

  const query = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(
    search
  )}${limit}${format}`;

  const response = await axios
    .get<MlbbResponse>(query)
    .then((res) => res)
    .catch((e: AxiosError) => console.error(e.message));

  if (!response!.data.results || response!.status != 200) return;

  const {
    data: { results },
  } = response as AxiosResponse<MlbbResponse>;

  const avgPreco = (arr: number[]): number =>
    arr.reduce((a, b) => a + b, 0) / arr.length;

  const prices: number = avgPreco(results.map((v) => v.price));
  const attributes: { at_name: string; at_value: string }[] = [];

  results.forEach((v) =>
    v.attributes.forEach((at) => {
      if (!attributes.find((p) => p.at_name == at.name)) {
        attributes.push({
          at_name: at.name,
          at_value: at.value_name,
        });
      }
    })
  );

  return {
    avg_price: Math.round(prices),
    attributes,
  };
}