export default function Secao({ titulo }) {
  return (
    <>
      <section className="flex justify-center bg-[--secondary] intersect:motion-preset-slide-right motion-delay-0">
        <div className="container ">
          <section className="flex items-center h-32">
            <h1 className="text-white font-bold text-4xl lg:text-5xl">
              {titulo}
            </h1>
          </section>
        </div>
      </section>
    </>
  );
}
