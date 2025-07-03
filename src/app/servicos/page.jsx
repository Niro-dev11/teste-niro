import CardServicos from "@/components/cardServicos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Secao from "@/components/secao";

import { ServicosAPI } from "@/lib/servicos";

export default function Servicos() {
  return (
    <>
      <Header tabAtiva="servicos" />
      <main>
        <Secao titulo="Serviços" />
        <section className="flex justify-center my-10">
          <div className="container grid lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center intersect:motion-preset-slide-up motion-delay-75">
            {ServicosAPI.map((servico, index) => (
              <CardServicos
                key={index}
                imagem={servico.imagem}
                titulo={servico.titulo}
                texto={servico.texto}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer tabAtiva="servicos" />
    </>
  );
}
