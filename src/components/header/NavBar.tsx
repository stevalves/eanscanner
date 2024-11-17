"use client"

import { useState } from "react";
import NavList from "./NavList";
import HamburguerButton from "./HamburguerButton";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex w-max items-center justify-between text-2xl text-brand1 md:text-[2rem]">
      <NavList open={open} setOpen={setOpen} />
      <HamburguerButton open={open} setOpen={setOpen} />
    </nav>
  );
}
