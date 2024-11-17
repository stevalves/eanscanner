import Link from "next/link";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="w-full h-28 bg-brand4 flex items-center">
      <div className="container mx-auto flex justify-between items-center text-gray-200">
        <Link href={"/"} className="flex items-center gap-6 cursor-pointer">
          <Logo />
          <h1 className="text-gray-100 text-3xl">
            <span className="text-gray-200 font-bold">ean</span>
            Scanner
          </h1>
        </Link>
        <p className="text-xl">Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
