import Loading from "@/components/Loading";


export default function loading() {
  return (
    <div className="absolute w-screen h-screen bg-black/20 flex justify-center items-center z-[9999]">
      <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center">
        <Loading />
      </div>
    </div>
  );
}
