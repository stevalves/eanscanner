import { Header } from "@/components";
import EanForm from "@/components/EanForm";
import { Footer } from "@/components/Footer";
import { Advantages } from "@/components/sections/Advantages";
import { EanTypes } from "@/components/sections/EanTypes";
import Image from "next/image";

export default function Home({ searchParams }: { searchParams: any }) {
  const { json } = searchParams;

  interface iProduct {
    name: string;
    description: string;
    category: string;
    avg_price: number;
    attributes: {
      at_name: string;
      at_value: string;
    }[];
    images: string[];
  }
  const productExample: iProduct = {
    name: "Macarrão Instantâneo Lámen Carne Nissin Miojo",
    description:
      "Macarrão instantâneo sabor carne, fácil de preparar e delicioso. Pacote de 85g.",
    category: "Massa",
    avg_price: 9,
    attributes: [
      {
        at_name: "Marca",
        at_value: "Nissin",
      },
      {
        at_name: "Código universal de produto",
        at_value: "7891079001004",
      },
      {
        at_name: "Condição do item",
        at_value: "Novo",
      },
      {
        at_name: "Modelo",
        at_value: "85g",
      },
      {
        at_name: "Comprimento da embalagem",
        at_value: "12.2 cm",
      },
      {
        at_name: "Peso da embalagem",
        at_value: "90 g",
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
        at_value: "85 g",
      },
      {
        at_name: "Peso líquido",
        at_value: "85 g",
      },
    ],
    images: [
      "https://cdn-cosmos.bluesoft.com.br/products/7891079000205",
      "https://static.openfoodfacts.org/images/logos/off-logo-vertical-white-social-media-preview.png",
    ],
  };

  return (
    <>
      <div className="relative w-full h-screen justify-center items-center flex">
        <div className="absolute bottom-10 left-10 w-1/4 h-1/6 border-l-2 border-l-brand2 border-b-4 border-b-brand3 hidden lg:flex" />
        <div className="absolute top-36 right-10 w-1/6 h-1/4 border-r-2 border-r-brand2 border-t-4 border-t-brand3 hidden lg:flex" />
        <div className="container mx-4 flex justify-center items-center flex-col gap-12">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h4 className="text-3xl text-brand2">Leitor de Código de Barras</h4>
            <p className="text-gray-600 text-center">
              Insira aqui o código de barras do seu produto para ter acesso aos
              seus dados
            </p>
          </div>
          <EanForm />
        </div>
      </div>
      <Advantages />
      <EanTypes />
      <section className="w-full py-8 px-2 bg-brand3">
        <div className="container mx-auto">
          <div className="flex flex-col gap-2 px-2">
            <h3 className="text-gray-100 font-medium text-3xl text-center">
              Nossos Planos
            </h3>
            <p className="font-light text-gray-300 text-xl text-center">
              Aqui também oferecemos planos que vão auxiliar empresas a
              implementar essa ferramenta no dia-a-dia e que abraça todos os
              setores independente da sua escala.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
