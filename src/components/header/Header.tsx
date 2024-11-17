import Logo from "../Logo";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 md:h-28 shadow-md fixed top-0 right-0 z-50 bg-gray-50">
        <div className="container h-full mx-auto flex justify-between items-center px-4">
          <Link href={"/"} className="flex items-center gap-6 cursor-pointer">
            <Logo />
            <h1 className="text-brand2 text-3xl md:flex hidden">
              <span className="text-brand3 font-bold">ean</span>
              Scanner
            </h1>
          </Link>
          <NavBar />
        </div>
      </header>
    </>
  );
}
