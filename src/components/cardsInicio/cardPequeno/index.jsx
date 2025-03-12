import { Check } from "lucide-react";
import Image from "next/image";

export default function CardPequeno({
  ordem,
  titulo,
  descricao,
  imagem,
  vantagens,
  vantagemUm,
  vantagemDois,
  vantagemTres,
  vantagemQuatro,
}) {
  return (
    <>
      <section className="flex justify-center">
        {ordem === "textoImagem" ? (
          <div className="container grid sm:grid-cols-2 gap-y-5 gap-5">
            <div className="px-5">
              <h2 className="font-bold text-[--primary] text-2xl lg:text-3xl">
                {titulo}
              </h2>
              <p className="text-lg mt-3">{descricao}</p>
              {vantagens === true && (
                <div className="flex flex-col gap-6 mt-6">
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemUm}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemDois}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemTres}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemQuatro}
                  </p>
                </div>
              )}
            </div>
            <figure>
              <Image
                src={imagem}
                alt={titulo}
                width={758}
                height={335}
                quality={100}
              ></Image>
            </figure>
          </div>
        ) : (
          ""
        )}
        {ordem === "imagemTexto" ? (
          <div className="container grid sm:grid-cols-2 gap-y-5 gap-5">
            <figure>
              <Image
                src={imagem}
                alt={titulo}
                width={758}
                height={335}
                quality={100}
              ></Image>
            </figure>
            <div className="px-5">
              <h2 className="font-bold text-[--primary] text-2xl lg:text-3xl">
                {titulo}
              </h2>
              <p className="text-lg mt-3">{descricao}</p>
              {vantagens === true && (
                <div className="flex flex-col gap-6 mt-6">
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemUm}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemDois}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemTres}
                  </p>
                  <p className="flex">
                    <Check className="text-[--primary] mr-2" />
                    {vantagemQuatro}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
