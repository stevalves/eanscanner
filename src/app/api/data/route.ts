// Aqui será feita a junção das funções para enfim retornar um JSON pronto para a aplicação.

import { AxiosResponse } from "axios";
import { GetProductData, GoogleAPIResponse } from "./google";
import { ensureProductIsValid, generateJSON } from "./groq";
import { NextResponse } from "next/server";

async function getJSON(ean: string): Promise<Object> {
  let { data: productData } = (await GetProductData(
    ean
  )) as AxiosResponse<GoogleAPIResponse>;

  // Ensure exists data
  if (!productData || !productData.items)
    return { response: "error", message: "product not found!" };

  const productImageList = productData.items.map(
    (i) => i.pagemap.metatags[0]["og:image"]
  ).filter((i) => i);

  const productName = productData.items.find(
    (v) => v.pagemap.metatags[0]["og:title"]
  )!.pagemap.metatags[0]["og:title"];

  if (!(await ensureProductIsValid(productName!))) {
    return { response: "error", message: "product is not valid!" };
  }

  const getProductCategoryAndDescription = await generateJSON(productName!);

  const response = {
    ...getProductCategoryAndDescription,
    images: productImageList,
  };

  return response;
}

export async function GET() {
  try {
    return NextResponse.json(await getJSON("17896003739333"));
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
