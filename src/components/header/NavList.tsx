import { tv } from "tailwind-variants";

interface iNavValues {
  id: string;
  title: string;
  href: string;
}

const navValues: iNavValues[] = [
  {
    id: "lerid",
    title: "Leitor",
    href: "#reader",
  },
  {
    id: "tiposid",
    title: "Tipos",
    href: "#eanTypes",
  },
  {
    id: "planosid",
    title: "Planos",
    href: "#plans",
  },
  {
    id: "sobreid",
    title: "Sobre Nós",
    href: "#aboutUs",
  },
  {
    id: "mapaid",
    title: "Mapa",
    href: "#map",
  },
];

interface iNavList {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function NavList({ open, setOpen }: iNavList) {
  const list_tv = tv({
    base: "fixed sm:py-4 overflow-hidden flex flex-col transition-all sm:static sm:h-max text-3xl sm:text-2xl justify-between py-24 sm:gap-5 w-0 sm:bg-transparent sm:flex-row sm:w-max sm:visible overflow-x-hidden bg-brand1/90 invisible top-0 h-screen right-0 duration-1",
    variants: {
      open: {
        true: "w-full visible z-10",
      },
    },
    defaultVariants: {
      open: false,
    },
  });

  return (
    <ul className={list_tv({ open })}>
      {navValues.map((value) => (
        <li
          className="flex items-center justify-center"
          key={value.id}
          title={value.id}
          onClick={() => setOpen(false)}
        >
          <a
            href={value.href}
            className="flex flex-col items-center transition-colors duration-[.3s] text-brand4 sm:text-brand3 hover:text-brand4 hover:underline"
          >
            {value.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
