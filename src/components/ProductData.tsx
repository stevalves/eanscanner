import { iGetJSON } from "@/app/api/product/[ean_product]/route";

export function ProductData({ data }: { data: iGetJSON }) {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </>
  );
}
