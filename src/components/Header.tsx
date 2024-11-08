import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UpHeader = () => {
  return (
    <div className="w-screen h-12 flex justify-center border-b-2 border-brand4">
      <div className="container lg:w-4/5 text-md flex justify-between items-center text-brand4 font-semibold tracking-wide">
        <a
          href="#"
          className="flex items-center justify-center gap-2 hover:text-brand3 transition duration-300 group"
        >
          <SiGooglemaps className="text-lg text-brand3 group-hover:text-brand4 transition duration-300" />
          Av. Ipsum Lorem, 443
        </a>
        <a
          href="mailto:eanscanner@mail.com"
          className="flex items-center justify-center gap-2 hover:text-brand3 transition duration-300 group"
        >
          <MdEmail className="text-lg text-brand3 group-hover:text-brand4 transition duration-300" />
          eanscanner@mail.com
        </a>
        <a
          href="tel:+551499294-4049"
          className="flex items-center justify-center gap-2 hover:text-brand3 transition duration-300 group"
        >
          <FaPhoneAlt className="text-lg text-brand3 group-hover:text-brand4 transition duration-300" />
          +551499294-4049
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <UpHeader />
      <header className="flex justify-center items-center relative h-24">
        <div className="absolute w-full h-[2px] bg-brand4 z-0" />
        <div className="absolute h-full w-[2px] bg-brand4 z-0"></div>
        <div className="border-8 border-white px-4 py-2 rounded flex items-center justify-center bg-white relative after:absolute after:content-[''] after:w-full after:h-full after:rounded after:border-brand4 after:border-2 after:z-10">
          <h1 className="text-brand4 font-bold tracking-wider text-2xl">EANScanner</h1>
        </div>
      </header>
      <nav className="h-12 w-full bg-brand4"></nav>
    </>
  );
};

export { Header };
