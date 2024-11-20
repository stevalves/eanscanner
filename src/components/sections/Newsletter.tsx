import { MdEmail } from "react-icons/md";

export default function Newsletter() {
  return (
    <div className="flex justify-center items-center md:py-16" id="newsletter">
      <div className="max-w-80 p-10 bg-gradient-to-b from-brand1 to-brand4 rounded-md shadow-lg text-center">
        <div className="flex justify-center items-center border-2 border-white text-white rounded-lg p-4 text-4xl">
          <MdEmail />
        </div>
        <h1 className="text-white text-2xl mt-6 tracking-wide">Inscreva-se</h1>
        <hr className="w-12 h-1 my-4 bg-white border-none" />
        <p className="text-white text-lg opacity-90">
          Fique por dentro das nossas atualizações e novas promoções em primera mão.
        </p>
        <form className="flex flex-col items-center mt-6">
          <input
            type="text"
            placeholder="example@mail.com"
            className="w-44 mb-4 bg-transparent text-white border-b-2 border-white focus:outline-none focus:w-48 transition-all duration-500"
          />
          <input
            type="submit"
            value="Inscrever"
            className="w-44 mt-4 px-4 py-2 border-2 border-white rounded-full bg-transparent text-white font-bold tracking-wider transition-all duration-300 hover:bg-white hover:text-brand3 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
