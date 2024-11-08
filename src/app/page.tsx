import { Logo } from "@/components";

export default function Home() {
  return (
    <header className="w-full h-32 bg-indigo-200 shadow-md">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Logo />
      </div>
    </header>
  );
}
