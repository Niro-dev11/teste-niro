import { pegarAnoAtual } from "@/lib/anoAtual";
import bannerComsystem from "../../images/banner-comsystem.webp";
export const revalidate = 3600;
export default function Hero() {
  return (
    <>
      <section className="flex justify-center 2xl:block">
        <div className="container">
          <div className="2xl:w-[100vw] h-32 sm:h-44 md:h-[27.75rem] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bannerComsystem.src})` }}>
            <div className="flex flex-col justify-center items-center h-full text-white ">
              <h1 className="font-bold text-xl sm:text-2xl md:text-5xl text-center w-full xl:w-1/2">
                A maior empresa de tecnologia da região norte do Mato Grosso do Sul.
              </h1>
              <h2 className="text-center text-xs md:text-lg">Criando soluções inteligentes há {pegarAnoAtual() - 1993} anos.</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
