"use client";
import { PrevButton, NextButton, usePrevNextButtons } from "../emblaCarrossel/arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { AplicativosAPI } from "@/lib/aplicativos";
import "../emblaCarrossel/embla.css";
import Image from "next/image";

const CardLojaApps = () => {
  const options = { dragFree: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {AplicativosAPI.map((aplicativos, index) => (
            <div className="embla__slide bg-slate-50 drop-shadow-lg break-words" key={index}>
              <figure className="flex justify-center items-center py-10  h-1/3">
                <Image src={aplicativos.imagem} alt={aplicativos.nome} width={120} height={120} quality={100}></Image>
              </figure>

              <div className="w-full flex flex-col  h-1/2">
                <h2 className="text-2xl font-bold py-2 px-3">{aplicativos.nome}</h2>
                <p className="text-[--secondary] px-3">{aplicativos.descricao}</p>
              </div>

              <div className="mt-10">
                <a
                  href={aplicativos.download}
                  className="bg-[--primary] w-full text-white h-14 flex items-center justify-center rounded-b-lg text-lg"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default CardLojaApps;
