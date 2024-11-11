import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";

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
      {/* <UpHeader /> */}
      <header className="w-full h-32 bg-indigo-200 shadow-md">
        <div className="container h-full mx-auto flex justify-between items-center">
          <Logo />
        </div>
      </header>
      <nav className="h-12 w-full bg-brand4"></nav>
    </>
  );
};

export { Header };
