"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../emblaCarrossel/arrowButtons";
import { DotButton, useDotButton } from "../../emblaCarrossel/dotButton";
import "./emblaAvaliacoes.css";
import "../../emblaCarrossel/embla.css"

import { AvaliacoesAPI } from "@/lib/avaliacoes";
import Image from "next/image";

const CardAvaliacoes = () => {
  const options = { loop: true};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="emblaAV">
      <div className="embla__viewportAV" ref={emblaRef}>
        <div className="embla__containerAV">
          {AvaliacoesAPI.map((avaliacoes, index) => (
            <div
              className="embla__slideAV intersect:motion-preset-slide-up motion-delay-500"
              key={index}
            >
              <div className="embla__slide__numberAV px-6 ">
                <div className="flex items-center w-full h-1/7 gap-1">
                  <Image
                    src="/star.svg"
                    width={20}
                    height={20}
                    alt="Estrela"
                  ></Image>
                  <p className="font-bold text-[--primary]">
                    {" "}
                    {avaliacoes.avaliacao}
                  </p>
                </div>
                <div className="flex items-center h-1/2 w-full">
                  <p>{avaliacoes.texto}</p>
                </div>
                <div className="flex gap-5 w-full h-1/5 pt-5 border-t-[1px]">
                  <Image
                    src={avaliacoes.perfil}
                    alt={avaliacoes.nome}
                    className="rounded-full"
                    width={40}
                    height={40}
                  ></Image>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold">{avaliacoes.nome}</p>
                    <p className="text-[--secondary] text-sm">
                      {avaliacoes.empresaProprietario}
                    </p>
                  </div>
                </div>
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
    </div>
  );
};

export default CardAvaliacoes;
