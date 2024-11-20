import { MdEmail, MdPhone, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-brand3/20 text-gray-800">
      <div className="container flex flex-wrap mx-auto px-2 py-16">
        <section className="w-full md:w-1/4 p-4">
          <h3 className="text-brand2 text-xl font-medium">eanScanner</h3>
          <p className="mt-4">
            Sua melhor plataforma para consultas utilizando código de barras.
            Criado para você, por quem entende suas necessidades.
          </p>
        </section>
        <section className="w-full md:w-1/4 p-4">
          <h3 className="text-brand2">Links</h3>
          <a href="#reader" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Leitor
          </a>
          <a href="#types" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Tipos
          </a>
          <a href="#plans" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Planos
          </a>
          <a href="#aboutUs" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Sobre nós
          </a>
        </section>
        <section className="w-full md:w-1/4 p-4">
          <h3 className="text-brand2">Outros</h3>
          <a href="#advantages" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Vantagens
          </a>
          <a href="#testimonial" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Depoimento
          </a>
          <a href="#newsletter" className="flex items-center mt-4 hover:text-gray-950">
            <MdOutlineKeyboardArrowRight />
            Newsletter
          </a>
        </section>
        <section className="w-full md:w-1/4 p-4">
          <h3 className="text-brand2">Alguma dúvida?</h3>
          <a
            href="mailto:support@eanscanner.com"
            className="flex items-center mt-4 hover:text-gray-950"
          >
            <MdEmail />
            support@eanscanner.com
          </a>
          <a
            href="tel:+5511998444424"
            className="flex items-center mt-4 hover:text-gray-950"
          >
            <MdPhone />
            +55 (11) 99844-4424
          </a>
        </section>
      </div>
      <div className="bg-brand4 text-center py-4">
        <h6 className="container mx-auto text-center text-gray-300">
          Copyright ©2024 Direitos Reservados | eanscanner
        </h6>
      </div>
    </footer>
  );
}
