import CardsInicio from "@/components/cardsInicio";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import InfoBreve from "@/components/infoBreve";

export default function Home() {
  return (
    <>
      <Header tabAtiva="inicio"/>
      <main>
        <Hero/>
        <InfoBreve/>
        <CardsInicio/>
      </main>
      <Footer tabAtiva="inicio"/>
    </>

  );
}
