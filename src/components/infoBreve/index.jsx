import { Building2, Tractor, GitPullRequestDraft } from "lucide-react";

export default function InfoBreve() {
  return (
    <>
      <section className="flex justify-center items-center h-[34rem] md:h-[25rem] px-3 ">
        <div className="container grid md:grid-cols-2 gap-y-20">
          <div className="px-2 flex items-center justify-center intersect-once intersect:motion-preset-slide-up">
            <h2 className=" text-lg  md:text-2xl text-gray-600">
              Constituída em 1993, nossos profissionais são especializados em
              criar soluções em informática para os mais diversificados
              segmentos do comércio. Possuímos em nosso portfólio, empresas
              situadas em todo o Mato Grosso do Sul, principalmente na região
              Norte do Estado.
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-4">
              <span className="flex gap-1  text-lg text-[--primary] intersect:motion-preset-slide-up motion-delay-0">
                <Building2 />
                <p>Software de Gestão Empresarial</p>
              </span>
              <span className="flex gap-1  text-lg text-[--primary] intersect:motion-preset-slide-up motion-delay-300">
                <Tractor />
                <p>Software de Gestão para Agronegócios</p>
              </span>
              <span className="flex gap-1 text-lg text-[--primary] intersect:motion-preset-slide-up motion-delay-700">
                <GitPullRequestDraft />
                <p className="">
                  Software de Controle e Gerenciamento de Tributos Municipais
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
