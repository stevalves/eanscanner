import { GrSystem } from "react-icons/gr";
import { LuHeartHandshake } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className="pb-20">
      <div className="container mx-auto border-t-2 border-brand2 py-10">
        <div className="flex flex-wrap flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/2 px-4">
            <div>
              <h2 className="text-2xl font-bold uppercase relative pb-3 mb-8">
                sobre nós
                <span className="absolute bottom-0 left-0 w-14 h-1 bg-brand2"></span>
              </h2>
              <p className="text-gray-600 text-md leading-6 mb-6">
                Somos uma equipe dedicada a transformar a maneira como você
                acessa informações de produtos. Nossa aplicação foi criada para
                ser uma ferramenta simples e eficaz, capaz de decifrar códigos
                de barras e fornecer dados completos em poucos segundos.
              </p>
              <p className="text-gray-600 text-md leading-6 mb-6">
                Acreditamos que a tecnologia deve ser acessível a todos, por
                isso oferecemos uma solução gratuita e confiável. Nossa missão é
                facilitar o dia a dia de consumidores e empresas, ajudando você
                a tomar decisões rápidas e informadas enquanto economiza tempo e
                recursos.
              </p>
              <a
                href="#"
                className="border border-brand2 rounded-full text-brand2 text-sm font-bold uppercase px-6 py-2 hover:bg-brand2 hover:text-white transition"
              >
                ler mais
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full md:w-1/2 px-4">
            <div>
              {/* Feature 1 */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 relative w-16 h-16 border border-brand2 rounded-full flex items-center justify-center text-brand2 text-2xl">
                  <LuHeartHandshake />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg text-gray-800 font-bold mb-2">
                    Trabalhando com Amor
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    Cada detalhe da nossa aplicação reflete nosso compromisso em
                    entregar o melhor. Desenvolvemos tudo com dedicação para
                    garantir que você tenha uma experiência incrível e
                    funcional.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 relative w-16 h-16 border border-brand2 rounded-full flex items-center justify-center text-brand2 text-2xl">
                  <FaMoneyBillTrendUp />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg text-gray-800 font-bold mb-2">
                    Serviços Rentáveis
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    Com planos que cabem no seu bolso, oferecemos uma solução
                    econômica e eficiente para diferentes necessidades, sem
                    abrir mão da qualidade.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 relative w-16 h-16 border border-brand2 rounded-full flex items-center justify-center text-brand2 text-2xl">
                  <GrSystem />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg text-gray-800 font-bold mb-2">
                    Bom Suporte
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    Estamos aqui para você. Nosso suporte é rápido e atencioso,
                    sempre pronto para ajudar com suas dúvidas ou sugestões.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
