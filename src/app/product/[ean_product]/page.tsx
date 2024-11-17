"use client";

import { iGetJSON } from "@/app/api/product/[ean_product]/route";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { Loading } from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";
import genPdf from "./genPdf";

export default function Page() {
  const params = useParams();
  const { ean_product } = params;

  const [mainImage, setMainImage] = useState<string>("");
  const [data, setData] = useState<iGetJSON>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = (await axios
          .get<iGetJSON>(`/api/product/${ean_product}`)
          .then((r) => r)
          .catch((e) => {
            console.error(e.message);
          })) as AxiosResponse<iGetJSON>;

        setMainImage(data.images[0]);
        setData(data);
      } catch (err: any) {
        setError(true);
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  if (error && error) {
    return (
      <div className="absolute w-screen h-screen bg-black/20 flex justify-center items-center z-[9999]">
        <div className="w-full mx-2 sm:mx-0 sm:max-w-60 py-4 px-2 bg-brand3 rounded-md flex items-center justify-center flex-col gap-4">
          <p className="text-white font-light text-xl">
            Produto não encontrado!
          </p>
          <Link
            href={"/"}
            className="font-medium text-lg p-2 border-2 border-brand1 bg-white hover:bg-gray-200 transition-all duration-300 text-brand2 rounded"
          >
            Retornar
          </Link>
        </div>
      </div>
    );
  } else if (!data && !error) {
    return (
      <div className="absolute w-screen h-screen bg-black/20 flex justify-center items-center z-[9999]">
        <div className="w-14 h-14 bg-brand3 rounded-md flex items-center justify-center">
          <Loading />
        </div>
      </div>
    );
  }
  if (data) {
    return (
      <main className="mt-32 container mx-auto">
        <div className="w-full py-4 flex md:flex-row flex-col items-center justify-between">
          <div className="flex gap-4 items-center w-full md:w-fit justify-between md:justify-normal px-4 md:px-0">
            <Link href="/" className="text-3xl font-medium text-brand3">
              <IoIosReturnLeft />
            </Link>
            <h3 className="text-3xl font-medium text-brand3">
              Informações do produto
            </h3>
          </div>
          <div className="flex gap-4 justify-end w-full px-4 md:px-0 md:justify-normal md:w-fit">
            <Link
              href={`/api/product/${ean_product}`}
              className="text-brand3 text-xl hover:text-brand4 hover:underline transition-all duration-300"
            >
              Formato JSON
            </Link>
            <button
              onClick={() => genPdf(data)}
              className="text-brand3 text-xl hover:text-brand4 hover:underline transition-all duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full bg-slate-200 py-14 px-8 rounded-lg">
          <div
            className="w-full md:w-1/2 flex flex-col gap-2 pr-4"
            id="product-info"
          >
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
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
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
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-brand1">
              <caption className="text-3xl w-full text-center font-medium text-brand3 py-4">
                Tabela de atributos
              </caption>
              <thead className="hidden sm:table-header-group">
                <tr className="bg-gray-100 border border-brand1">
                  <th className="px-4 py-2 text-lg font-normal text-brand3 uppercase">
                    Atributo
                  </th>
                  <th className="px-4 py-2 text-lg font-normal text-brand2 uppercase">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.attributes?.map((value, index) => (
                  <tr
                    key={`${value.at_name}${index}`}
                    className="bg-white even:bg-brand1/20 sm:border sm:border-brand1 sm:table-row flex flex-col mb-4 sm:mb-0"
                  >
                    <td
                      data-label="Atributo"
                      className="px-4 py-2 text-sm font-medium text-gray-800 sm:border sm:border-brand1 sm:table-cell flex justify-between sm:justify-center"
                    >
                      <span className="sm:hidden font-bold">Atributo:</span>
                      {value.at_name}
                    </td>
                    <td
                      data-label="Valor"
                      className="px-4 py-2 text-sm text-gray-800 sm:border sm:border-brand1 sm:table-cell flex justify-between sm:justify-center"
                    >
                      <span className="sm:hidden font-bold">Valor:</span>
                      {value.at_value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}
