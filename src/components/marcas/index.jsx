import CarrosselMarcas from "./carrosselMarcas";

export function Marcas() {
  return (
    <>
      <section className="bg-[--tertiary] h-48 my-28">
        <h2 className="py-5 text-xl text-center font-semibold">
          Grandes marcas que confiam:
        </h2>
        <CarrosselMarcas />
      </section>
    </>
  );
}
