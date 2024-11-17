import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";

export function Advantages() {
  return (
    <section
      id="advantages"
      className="w-full md:h-48 h-fit py-16 md:py-0 bg-brand1 flex items-center justify-center"
    >
      <div className="container flex p-4 justify-center bg-white rounded-lg w-full md:h-36 mx-2 md:mx-0">
        <ul className="flex justify-between items-center w-full md:flex-row flex-col">
          <li className="md:w-1/3 md:h-full w-full flex items-center gap-4 md:justify-center md:border-r-2 md:border-r-brand3 md:px-4">
            <HiOutlineWrenchScrewdriver className="text-5xl text-brand4" />
            <div className="">
              <h6 className="text-2xl text-brand4">Suporte</h6>
              <p className="text-md font-light text-gray-800">
                Facilita o controle de produtos e integração com sistemas,
                reduzindo erros.
              </p>
            </div>
          </li>
          <li className="md:w-1/3 md:h-full w-full flex items-center gap-4 md:justify-center md:px-4">
            <MdOutlinePayments className="text-5xl text-brand4" />
            <div className="">
              <h6 className="text-2xl text-brand4">Acessivél</h6>
              <p className="text-md font-light text-gray-800">
                Compatível com dispositivos comuns, elimina a necessidade de
                equipamentos caros.
              </p>
            </div>
          </li>
          <li className="md:w-1/3 md:h-full w-full flex items-center gap-4 md:justify-center md:border-l-2 md:border-l-brand3 md:px-4">
            <AiOutlineThunderbolt className="text-5xl text-brand4" />
            <div className="">
              <h6 className="text-2xl text-brand4">Velocidade</h6>
              <p className="text-md font-light text-gray-800">
                Acelera vendas, inventários e registros, aumentando a
                produtividade.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
