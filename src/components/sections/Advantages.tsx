import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";

export function Advantages() {
  return (
    <section
      id="advantages"
      className="w-full h-48 bg-brand1 flex items-center justify-center"
    >
      <div className="container flex p-4 justify-center bg-white rounded-lg w-full h-36">
        <ul className="flex justify-between w-full">
          <li className="w-1/3 h-full flex items-center gap-4 justify-center border-r-2 border-r-brand3 px-4">
            <HiOutlineWrenchScrewdriver className="text-5xl text-brand4" />
            <div className="">
              <h6 className="text-2xl text-brand4">Suporte</h6>
              <p className="text-md font-light text-gray-800">
                Facilita o controle de produtos e integração com sistemas,
                reduzindo erros.
              </p>
            </div>
          </li>
          <li className="w-1/3 h-full flex items-center gap-4 justify-center px-4">
            <MdOutlinePayments className="text-5xl text-brand4" />
            <div className="">
              <h6 className="text-2xl text-brand4">Acessivél</h6>
              <p className="text-md font-light text-gray-800">
                Compatível com dispositivos comuns, elimina a necessidade de
                equipamentos caros.
              </p>
            </div>
          </li>
          <li className="w-1/3 h-full flex items-center gap-4 justify-center border-l-2 border-l-brand3 px-4">
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
