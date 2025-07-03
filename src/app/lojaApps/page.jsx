import Header from "@/components/header";
import Secao from "@/components/secao";
import CardLojaApps from "@/components/cardLojaApps";
import Footer from "@/components/footer";

export default function LojaDeAplicativos() {
  return (
    <>
      <Header tabAtiva="lojaApps" />
      <main>
        <Secao titulo="Loja de Aplicativos" />
        <section className="flex justify-center h-[50rem]">
          <div className="container intersect:motion-preset-slide-up motion-delay-75">
            <div className="my-5">
              <CardLojaApps />
            </div>
          </div>
        </section>
      </main>
      <Footer tabAtiva="lojaApps" />
    </>
  );
}
