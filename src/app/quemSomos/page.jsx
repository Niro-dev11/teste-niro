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
          <div className="container intersect:motion-preset-slide-up motion-delay-300">
            <div className=" flex items-center my-10">
              <h2 className="text-[--secondary] text-xl px-2">
                Somos uma empresa especializada em criar soluções inovadoras em tecnologia da informação para diversos segmentos do comércio. Ao longo dos anos,
                desenvolvemos uma sólida reputação por oferecer serviços de alta qualidade, com foco na satisfação e no sucesso de nossos clientes.
              </h2>
            </div>
            <h3 className="text-4xl font-bold text-[--secondary]">Nossa Trajetória</h3>
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
