export default function CardServicos({titulo, texto}) {
  return (
    <>
      <section className="flex w-[90vw] md:w-[25rem] bg-zinc-50 drop-shadow-lg rounded my-6">
        <div className="w-full h-64 p-4">
          <h3 className="font-bold text-[--primary] text-base sm:text-xl py-2 w-full">{titulo}</h3>
          <p className="text-sm sm:text-base text-[--secondary]">{texto}</p>  
        </div>
      </section>
    </>
  );
}
