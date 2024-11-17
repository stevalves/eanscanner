"use client";

import { getJSON, iGetJSON } from "@/app/api/product/[ean_product]/route";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { ProductData } from "@/components/ProductData";
import { Loading } from "@/components/Loading";
import Image from "next/image";

export default function Page() {
  const params = useParams();
  const { ean_product } = params;

  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<iGetJSON>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await Promise.resolve(
          setTimeout(() => {
            const data = {
              name: "Torrada Marilan Lev Magic Toast Pacote 110g 6 Unidades",
              description:
                "Deliciosa torrada em pacote prático com 6 unidades, ideal para um lanche rápido e saboroso. Com 110g, é perfeita para quem busca uma opção leve e nutritiva.",
              category: "Torradas",
              avg_price: 6,
              attributes: [
                {
                  at_name: "Marca",
                  at_value: "Marilan",
                },
                {
                  at_name: "Código universal de produto",
                  at_value: "7896003739343",
                },
                {
                  at_name: "Condição do item",
                  at_value: "Novo",
                },
                {
                  at_name: "Peso líquido",
                  at_value: "110 g",
                },
                {
                  at_name: "Comprimento da embalagem",
                  at_value: "21.8 cm",
                },
                {
                  at_name: "Peso da embalagem",
                  at_value: "130 g",
                },
                {
                  at_name: "Conservação do produto",
                  at_value: "Temperatura ambiente",
                },
                {
                  at_name: "Formato de venda",
                  at_value: "Unidade",
                },
                {
                  at_name: "Unidades por kit",
                  at_value: "1",
                },
                {
                  at_name: "Peso da unidade",
                  at_value: "110 g",
                },
              ],
              images: [
                "https://riovermelho.agilecdn.com.br/800310_1.jpg",
                "https://cdn-cosmos.bluesoft.com.br/products/7896003739336",
              ],
            };
            setData(data);
            setMainImage(data.images[0]);
          }, 2000)
        );
      } catch (er) {
        console.error(er);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = (await axios
  //         .get<iGetJSON>(`/api/product/${ean_product}`)
  //         .then((r) => r)
  //         .catch((e) => {
  //           console.error(e.message);
  //         })) as AxiosResponse<iGetJSON>;

  //       setData(data);
  //     } catch (err: any) {
  //       console.error(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (!data)
    return (
      <div className="absolute w-screen h-screen bg-black/20 flex justify-center items-center z-[9999]">
        <div className="w-14 h-14 bg-brand3 rounded-md flex items-center justify-center">
          <Loading />
        </div>
      </div>
    );

  return (
    <main className="mt-32 container mx-auto">
      <h3 className="text-3xl w-full text-center font-medium text-brand3 py-4">
        Informações do produto
      </h3>
      <div className="flex w-full bg-slate-200 py-14 px-8 rounded-lg">
        <div className="w-1/2 flex flex-col gap-2" id="product-info">
          <h2 className="text-3xl font-light text-brand2">{data.name}</h2>
          <h6 className="text-xl font-medium text-brand4">{data.category}</h6>
          <h6 className="text-xl font-medium text-brand4">
            R$ {data.avg_price?.toFixed(2)}~
          </h6>
          <p className="text-gray-800 text-lg mt-4">{data.description}</p>
          <div className="flex gap-2 flex-wrap mt-4">
            {data.images.map((v) => (
              <button
                key={v}
                className="w-20 h-20 rounded-lg overflow-hidden border border-brand2"
                onClick={() => setMainImage(v)}
              >
                <Image
                  width="0"
                  height="0"
                  src={v}
                  alt={data.name}
                  sizes="100vw"
                  className="w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-80 bg-brand1/40 rounded-lg overflow-hidden">
            <Image
              width="0"
              height="0"
              src={mainImage}
              alt={data.name}
              sizes="100vw"
              className="h-full w-full object-contain transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <div className="my-12">
        <h3 className="text-3xl w-full text-center font-medium text-brand3 py-4">
          Tabela de atributos
        </h3>
        {/*  */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-2xl font-light text-surface text-brand3">
                  <thead className="border-b border-brand1 font-normal dark:border-brand3/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Nome
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.attributes?.map((v) => {
                      return (
                        <tr className="border-b border-neutral-200 dark:border-brand3/10">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {v.at_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {v.at_value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </main>
  );
}
