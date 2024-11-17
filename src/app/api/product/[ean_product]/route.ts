// Aqui será feita a junção das funções para enfim retornar um JSON pronto para a aplicação.

import { AxiosResponse } from "axios";
import { GetProductData, GoogleAPIResponse } from "./google";
import { generateJSON } from "./groq";
import { NextRequest, NextResponse } from "next/server";
import { getAttributesAndAvPrice } from "./mlbb";

export interface iGetJSON {
  images: string[];
  avg_price?: number | undefined;
  attributes?:
    | {
        at_name: string;
        at_value: string;
      }[]
    | undefined;
  name: string;
  description: string;
  category: string;
}

export async function getJSON(ean: string): Promise<iGetJSON> {
  let { data: productData } = (await GetProductData(
    ean
  )) as AxiosResponse<GoogleAPIResponse>;

  // Ensure exists data
  // if (!productData || !productData.items)
  //   return { response: "error", message: "product not found!" };

  let productImageList: string[] = [];
  let productName: string = "";

  productData.items.forEach((i) => {
    // Try to get some image from product
    if (
      i.pagemap.metatags[0]["og:image"] &&
      /https:\/\/.*/.test(i.pagemap.metatags[0]["og:image"])
    ) {
      productImageList.push(i.pagemap.metatags[0]["og:image"]);
    }

    if (
      i.pagemap.cse_image &&
      i.pagemap.cse_image[0].src &&
      !productImageList.length &&
      /https:\/\/.*/.test(i.pagemap.cse_image[0].src)
    ) {
      productImageList.push(i.pagemap.cse_image[0].src);
    }
    if (
      i.pagemap.cse_thumbnail &&
      i.pagemap.cse_thumbnail[0].src &&
      !productImageList.length &&
      /https:\/\/.*/.test(i.pagemap.cse_image[0].src)
    ) {
      productImageList.push(i.pagemap.cse_image[0].src);
    }

    // Try to get title from metatags
    if (i.pagemap.metatags[0]["og:title"]) {
      productName = i.pagemap.metatags[0]["og:title"];
    }

    if (!productName) {
      productName = i.title;
    }
  });

  const getProductCategoryAndDescription = await generateJSON(productName!);

  const response = {
    ...getProductCategoryAndDescription,
    ...(await getAttributesAndAvPrice(productName!)),
    images: productImageList,
  };

  return response;
}

export async function GET(
  _: NextRequest,
  context: { params: { ean_product: string } }
) {
  const { ean_product } = context.params;

  try {
    return NextResponse.json(await getJSON(ean_product));
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
