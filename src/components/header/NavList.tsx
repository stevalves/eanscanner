import { tv } from "tailwind-variants";

interface iNavValues {
  id: string;
  title: string;
  href: string;
}

const navValues: iNavValues[] = [
  {
    id: "ReaderId1",
    title: "Leitor",
    href: "#reader",
  },
  {
    id: "TypesId2",
    title: "Tipos",
    href: "#types",
  },
  {
    id: "PlansId3",
    title: "Planos",
    href: "#plans",
  },
  {
    id: "UsId4",
    title: "Sobre Nós",
    href: "#us",
  },
];

interface iNavList {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

const NavList = ({ open, setOpen }: iNavList) => {
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
};

export default NavList;
