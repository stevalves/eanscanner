import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="w-full h-28 shadow-md fixed top-0 right-0 z-50 bg-transparent">
        <div className="container h-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo />
            <h1 className="text-brand2 text-3xl">
              <span className="text-brand3 font-bold">ean</span>
              Scanner
            </h1>
          </div>
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
