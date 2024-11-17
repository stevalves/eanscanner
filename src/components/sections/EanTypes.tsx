import ean_isbn from "../../img/ean_isbn.webp";
import ean_gs1 from "../../img/ean_gs1.webp";
import ean_upc from "../../img/ean_upc.webp";
import ean_128 from "../../img/ean_128.webp";
import ean from "../../img/ean.webp";
import Image from "next/image";

const eanTypeList = [
  {
    id: 1,
    title: "Código de barras GS1",
    description:
      "O GS1-128 (EAN 128) é uma versão moderna com caracteres ASCII. Usado principalmente na indústria de varejo e para rastreamento de mercadorias.",
    max_length: "Ilimitado",
    characters: "ASCII",
    use_to: ["Rastreamento", "Varejo"],
    imageSrc: ean_gs1,
  },
  {
    id: 2,
    title: "Código de barras UPC",
    description:
      "Existem dois tipos de códigos de barras UPC: UPC-A e UPC-E. O primeiro possui 12 dígitos e o segundo 8 dígitos, colocados em produtos menores.",
    max_length: "8-12",
    characters: "0-9",
    use_to: ["Armazéns", "Varejo"],
    imageSrc: ean_upc,
  },
  {
    id: 3,
    title: "Código de Barras 128",
    description:
      "Este é um código de barras universal e é uma boa escolha. Podemos ver o código 128 sendo usado no envio e transporte, por exemplo.",
    max_length: "Ilimitado",
    characters: "ASCII",
    use_to: ["Remessa", "Transporte"],
    imageSrc: ean_128,
  },
  {
    id: 4,
    title: "Código de barras EAN",
    description:
      "Os códigos de barras EAN podem ser vistos principalmente usados em lojas de varejo. As diferentes versões de EAN têm diferentes comprimentos de caracteres.",
    max_length: "2-12",
    characters: "0-9",
    use_to: ["Varejo"],
    imageSrc: ean,
  },
  {
    id: 5,
    title: "Código de barras ISBN",
    description:
      "Os códigos de barras ISBN são usados para identificar revistas e livros. Eles incluem o título do livro, país e nome da editora.",
    max_length: "Fixo",
    characters: "0-9",
    use_to: ["Livros", "Revistas"],
    imageSrc: ean_isbn,
  },
  {
    id: 6,
    title: "Matriz de dados",
    description:
      "Este é um código de barras 2D. Ele pode conter números, texto e dados. O principal caso de uso da matriz de dados é rotular produtos médicos e eletrônicos.",
    max_length: "Até 3116",
    characters: "ASCII",
    use_to: ["Eletrônica Médica"],
    imageSrc: ean_isbn,
  },
];

export default function EanTypes() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center my-12">
        <h3 className="text-brand3 font-medium text-3xl text-center">
          Tipos de código de barras
        </h3>
        <p className="text-lg text-gray-800 font-normal text-center">
          Reunido aqui alguns dos códigos de barras mais populares e seus
          respectivos estojos do mercado
        </p>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {eanTypeList.map((ean) => (
              <li key={ean.id} className="group">
                <Image
                  alt={ean.title}
                  src={ean.imageSrc}
                  className="aspect-video w-full rounded-lg bg-brand1/40 object-contain group-hover:opacity-90 transition-all duration-300"
                />
                <h4 className="py-2 text-xl text-brand3 text-center font-medium">
                  {ean.title}
                </h4>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-md text-brand2">
                      Dígitos: {ean.characters}
                    </h5>
                    <h5 className="text-md text-brand2">
                      Comprimento: {ean.max_length}
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2">
                    {ean.use_to.map((v, i) => (
                      <h5 key={`${v}${i}`} className="text-md text-brand3/80">
                        | {i}
                      </h5>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-lg font-medium text-gray-800">
                  {ean.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
