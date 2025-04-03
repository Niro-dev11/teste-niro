"use client";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../emblaCarrossel/arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { ProgramasAPI } from "@/lib/programas";
import "../emblaCarrossel/embla.css";
import Image from "next/image";

const CardQuemSomos = () => {
  const options = { dragFree: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {ProgramasAPI.map((programa, index) => (
            <div
              className="embla__slide bg-slate-50 drop-shadow-lg"
              key={index}
            >
              <div className="h-1/3">
                <figure className="flex justify-center items-center py-10">
                  <Image
                    width={120}
                    height={120}
                    src={programa.imagem}
                    alt={programa.nome}
                    quality={100}
                  />
                </figure>
              </div>
              <div className="h-1/2">
                <p className="text-2xl font-bold py-2 pl-4">{programa.nome}</p>
                <p className="text-[--secondary] pl-4 opacity-80">{programa.descricao}</p>
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

export default CardQuemSomos;
