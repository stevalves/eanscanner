import Logo from "./Logo";

const Header = () => {
  return (
    <>
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
