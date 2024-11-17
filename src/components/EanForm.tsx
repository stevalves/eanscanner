"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiBarcode, CiSearch } from "react-icons/ci";
import { Loading } from "./Loading";

export default function EanForm() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const {
      eanInput: { value },
    } = form.elements as typeof form.elements & {
      eanInput: { value: string };
    };
    if (/^\d+$/.test(value)){
      setError(false)
    } else {
      setError(true)
      setIsLoading(false)
      return
    }

    return !value
      ? console.log("Nada aqui.")
      : router.push(`api/product/${value}}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 border border-dashed border-brand3 z-10 py-6 px-12 rounded flex flex-col gap-4 items-center"
    >
      <CiBarcode className="text-6xl text-brand2" />
      <div className="flex flex-col items-center">
        <h4 className="text-2xl text-brand2 text-center">
          No campo abaixo, insira o código de barras do produto:
        </h4>
        <p className="text-gray-600 text-center">
          Esta aplicação tem suporte a vários tipos de código de barras
        </p>
      </div>
      <fieldset className="flex gap-2 h-14">
        <div className="h-full">
          <input
            type="text"
            className="py-2 px-3 lg:focus:py-3 lg:focus:px-4 outline-none focus:border-brand4 transition-all h-14 duration-300 rounded border-2 border-brand2"
            id="eanInput"
            placeholder="7896003739333"
            name="eanInput"
            required
          />
          {error && (
            <p className="font-light text-sm text-red-700">
              Insira somente números.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-brand2 transition-all duration-300 hover:bg-brand3 cursor-pointer text-gray-200 rounded w-14 h-14 flex justify-center items-center"
        >
          {!isLoading ? <CiSearch className="text-3xl" /> : <Loading />}
        </button>
      </fieldset>
    </form>
  );
}
