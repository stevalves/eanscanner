// Aqui será feita a junção das funções para enfim retornar um JSON pronto para a aplicação.

import { GetProductData, GoogleAPIResponse } from "./google";
import { ensureProductIsValid, generateJSON } from "./groq";

async function getJSON(ean: string): Promise<Object> {

  const productData = (await GetProductData(ean)) as GoogleAPIResponse;

  // Ensure exists data
  if (!productData || !productData.items)
    return JSON.parse("{response: 'error'}");

  const productImageList = productData.items.map(
    (i) => i.pagemap.metatags[0]["og:image"]
  );

  const productName = productData.items.find(
    (v) => v.pagemap.metatags[0]["og:title"]
  )!.pagemap.metatags[0]["og:title"];

  if (!(await ensureProductIsValid(productName!))) {
    return JSON.parse("{response: 'error'}");
  }

  const getProductCategoryAndDescription = await generateJSON(productName!);
  
  const response = {
    ...getProductCategoryAndDescription,
    images: productImageList
  }
  
  return response
}