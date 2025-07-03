import Footer from "@/components/footer";
import Header from "@/components/header";
import Secao from "@/components/secao";
import CardQuemSomos from "@/components/cardQuemSomos";

export default function page() {
  return (
    <>
      <Header tabAtiva="quemSomos" />
      <main>
        <Secao titulo="Quem Somos" />
        <section className="flex justify-center items-center border">
          <div className="container intersect:motion-preset-slide-up motion-delay-75">
            <div className="grid sm:grid-cols-2 my-10 ">
              <h2 className="text-xl px-2 opacity-80">
                Ao longo dos anos, desenvolvemos uma sólida reputação por
                oferecer serviços de alta qualidade, com foco na satisfação e no
                sucesso de nossos clientes.
              </h2>
              <h2 className="text-xl px-2 opacity-80">
                Somos uma empresa especializada em criar soluções inovadoras em
                tecnologia da informação para diversos segmentos do comércio.
              </h2>
            </div>
            <h3 className="text-4xl font-bold text-[--secondary]">
              Nossa Trajetória
            </h3>
            <div className="my-5">
              <CardQuemSomos />
            </div>
          </div>
        </section>
      </main>
      <Footer tabAtiva="quemSomos" />
    </>
  );
}
