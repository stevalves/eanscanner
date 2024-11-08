import Image from "next/image";
import logo from "../img/shopping-bag.svg";

export default function Logo() {
  return (
    <div className="w-20 h-20">
      <Image src={logo} alt="logo eanscanner" />
    </div>
  );
}
