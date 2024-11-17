import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="w-full h-28 shadow-md fixed top-0 right-0 z-50 bg-gray-50">
        <div className="container h-full mx-auto flex justify-between items-center px-4">
          <Link href={"/"} className="flex items-center gap-6 cursor-pointer">
            <Logo />
            <h1 className="text-brand2 text-3xl">
              <span className="text-brand3 font-bold">ean</span>
              Scanner
            </h1>
          </Link>
          <nav className="">
            <ul className="flex gap-6 text-2xl text-brand2 font-medium">
              <li className="transition hover:text-brand3 duration-300 cursor-pointer hover:underline">
                Leitor
              </li>
              <li className="transition hover:text-brand3 duration-300 cursor-pointer hover:underline">
                Soluções
              </li>
              <li className="transition hover:text-brand3 duration-300 cursor-pointer hover:underline">
                Planos
              </li>
              <li className="transition hover:text-brand3 duration-300 cursor-pointer hover:underline">
                Sobre
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Header };
