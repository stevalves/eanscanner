import EanForm from "@/components/EanForm";
import AboutUs from "@/components/sections/AboutUs";
import Advantages from "@/components/sections/Advantages";
import EanTypes from "@/components/sections/EanTypes";
import Plans from "@/components/sections/Plans";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
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
      <Plans />
      <Testimonial />
      <AboutUs />
    </>
  );
}
