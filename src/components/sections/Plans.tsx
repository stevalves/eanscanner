import { FaStar } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Plans() {
  return (
    <section className="w-full py-8 px-2 bg-brand3" id="plans">
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
      <div className="flex items-center justify-center my-12">
        <div className="grid grid-cols-6 p-4 w-full max-w-7xl gap-3 gap-y-5">
          <div className="w-full col-span-full sm:col-span-3 lg:col-span-2 flex flex-col justify-end lg:h-full h-fit">
            <div className="flex flex-col p-6 text-center text-gray-800 bg-white rounded-lg border border-gray-300 shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Trial</h3>
              <p className="font-light text-gray-500 sm:text-lg">
                Usuários casuais ou pequenos negócios que precisam consultar
                produtos ocasionalmente.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-brand4">
                  $0.00
                </span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Limite de uso diário:{" "}
                    <span className="font-semibold">
                      100 consultas por dia.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Acesso aos dados:{" "}
                    <span className="font-semibold">
                      Nome do produto, marca e categoria.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Taxa de resposta padrão:{" "}
                    <span className="font-semibold">
                      Retorno dos dados em até 2 segundos.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Suporte técnico:{" "}
                    <span className="font-semibold">
                      Acesso aos canais de suporte.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-brand2 hover:bg-brand3 transition-colors duration-300 focus:ring-4 focus:ring-brand2 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Conhecer
              </a>
            </div>
          </div>
          <div className="w-full order-first col-span-full sm:order-last lg:order-none lg:col-span-2">
            <div className="flex flex-col p-6 mx-auto sm:max-w-md text-center text-gray-800 bg-white rounded-lg border-4 border-brand1 shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
              <h3 className="mb-4 text-brand2 flex gap-2 items-center justify-center">
                <FaStar />
                Mais rentável
                <FaStar />
              </h3>

              <p className="font-light text-gray-500 sm:text-lg">
                Pequenos empreendedores e desenvolvedores que precisam de mais
                dados e maior capacidade de uso.
              </p>
              <div className="flex flex-col my-8">
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 text-5xl font-extrabold text-brand4">
                    $9.99
                  </span>
                  <span className="text-gray-500">/Mês</span>
                </div>
                <span className="font-light text-sm px-12">
                  Adicional de $2 a cada 100 requisições que ultrapassarem o
                  limite
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Limite de uso diário:{" "}
                    <span className="font-semibold">
                      1000 consultas por dia.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Acesso aos dados:{" "}
                    <span className="font-semibold">
                      Inclui descrição do produto, preço médio e imagem
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Taxa de resposta padrão:{" "}
                    <span className="font-semibold">
                      Retorno dos dados em até 1 segundo.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Suporte técnico:{" "}
                    <span className="font-semibold">
                      Resposta em até 24 horas para dúvidas e problemas.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-brand2 hover:bg-brand3 transition-colors duration-300 focus:ring-4 focus:ring-brand2 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Conhecer
              </a>
            </div>
          </div>
          <div className="w-full col-span-full sm:col-span-3 lg:col-span-2 flex flex-col justify-end">
            <div className="flex flex-col p-6 text-center text-gray-800 bg-white rounded-lg border border-gray-300 shadow-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Empresa</h3>
              <p className="font-light text-gray-500 sm:text-lg">
                Grandes empresas, marketplaces ou startups que integram busca de
                produtos em tempo real como parte de sua aplicação principal.
              </p>
              <div className="flex flex-col my-8">
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 text-5xl font-extrabold text-brand4">
                    $14.99
                  </span>
                  <span className="text-gray-500">/Mês</span>
                </div>
                <span className="font-light text-sm px-12">
                  Adicional de $3 a cada 1000 requisições
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Limite de uso diário:{" "}
                    <span className="font-semibold">Consultas ilimitadas.</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Acesso aos dados:{" "}
                    <span className="font-semibold">
                      Inclui ainda atributos do produto, marca e muito mais.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Taxa de resposta padrão:{" "}
                    <span className="font-semibold">
                      Retorno dos dados em até 500ms.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FcOk className="text-xl min-w-8" />
                  <span>
                    Suporte técnico:{" "}
                    <span className="font-semibold">
                      Profissionais dedicados 24/7 para te ajudar.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-brand2 hover:bg-brand3 transition-colors duration-300 focus:ring-4 focus:ring-brand2 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Conhecer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
