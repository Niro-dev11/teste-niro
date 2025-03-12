import Image from "next/image";
import "./style.css";
import Logo from "@/components/logo";
import { Instagram, Phone } from "lucide-react";
import Link from "next/link";
import humano from "@/images/humano.webp"

export default function CardGrande() {
  return (
    <>
      <section id="banner1" className="grid sm:grid-cols-2 w-[1536px] h-[512px] sm:rounded-xl drop-shadow-xl container sm:pl-10">
        <div className="h-full hidden sm:block">
          <div className="flex items-center h-16 lg:h-36">
            <Logo />
          </div>
          <div className="flex flex-col 2xl:justify-center h-32">
            <p className="text-2xl sm:text-3xl xl:text-4xl text-white font-bold">SOFTWARES QUE</p>
            <p
              className=" text-3xl sm:text-4xl xl:text-5xl text-white font-bold
            "
            >
              IMPULSIONAM SEU NEGÓCIO
            </p>
          </div>
          <p className="text-white font-light h-40 sm:h-28 md:h-24 flex items-center 2xl:items-start">
            Desenvolvemos softwares inovadores para otimizar processos, aumentar a produtividade e levar seu negócio ao próximo nível. Tecnologia eficiente para
            resultados reais!
          </p>
          <div className="flex justify-center md:justify-start flex-col md:flex-row gap-2 md:gap-5 xl:gap-16 h-24 md:h-16 ">
            <div className="text-white flex items-center gap-2">
              <Phone width={32} height={32} className="xl:w-12 xl:h-12" />
              <a href="tel:+556732914114" className="hover:text-[--quartile] font-bold xl:text-xl">
                (67) 3291-4114
              </a>
            </div>
            <div className="text-white flex items-center gap-2">
              <Instagram width={32} height={32} className="xl:w-12 xl:h-12" />
              <a href="https://www.instagram.com/comsystemoficial/" target="_blank" className="hover:text-[--quartile] font-bold xl:text-xl">
                comsystemoficial
              </a>
            </div>
          </div>
          <div className=" h-14 flex xl:items-center">
            <p className="text-white font-bold xl:text-xl">www.comsysteminformatica.com.br</p>
          </div>
        </div>

        <div>
          <div className="grid xl:grid-cols-2 h-full">
            <div className="hidden xl:flex h-full items-end ">
              <Image src={humano} width={283} height={500} quality={100} alt="Empresário" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-end h-1/3 w-4/5">
                <p className="text-2xl font-bold text-white">INOVAÇÃO E TECNOLOGIA PARA UM FUTURO DIGITAL</p>
              </div>
              <div className="flex items-center h-1/2 sm:h-1/3 w-4/5">
                <p className="font-light text-white">
                  Soluções tecnológicas inovadoras para transformar negócios e impulsionar resultados. Conecte-se ao futuro com eficiência, automação e
                  inteligência digital.
                </p>
              </div>
              <div className="flex justify-center h-1/3 w-4/5">
                <Link href="/contato" className="w-full">
                  <button className="bg-[--primary] font-bold text-white w-full h-14 rounded-lg drop-shadow-lg intersect-once intersect:motion-preset-slide-up motion-delay-500">
                    Transforme seu Negócio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
