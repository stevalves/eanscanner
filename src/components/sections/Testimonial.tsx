import Image from "next/image";
import user from "../../img/user.webp";
import { SiComma } from "react-icons/si";

export default function Testimonial() {
  return (
    <section className="py-4">
      <div className="container mx-auto flex justify-center">
        <div className="w-3/4 my-12 rounded-lg flex flex-col items-center px-2 gap-2">
          <div className="flex text-brand4">
            <SiComma />
            <SiComma />
          </div>
          <p className="my-2 text-lg text-gray-800 text-center w-2/3">
            "O eanscanner é incrível! Ele facilita muito minha rotina ao buscar
            informações sobre produtos de forma rápida e gratuita. Recomendo
            para todos que precisam de uma solução prática e confiável!"
          </p>
          <Image src={user} alt="user icon" className="w-28 h-28" />
          <span className="text-md font-medium my-2">Jonas Cristino</span>
        </div>
      </div>
    </section>
  );
}
