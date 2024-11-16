"use client"

import { Header, Logo } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home({ searchParams }: { searchParams: any }) {
  const { json } = searchParams;

  const product = {
    ean: "343141413",
    name: "Produto Exemplo",
    price: 19.99,
    description: "Descrição do produto exemplo.",
  };

  // Verifica se o parâmetro ?json=true está presente
  if (json === "true") {
    const router = useRouter();
    useEffect(() => {
      router.push("api/data")
    }, [])
  }

  return <Header />;
}
