import CardGrande from "./cardGrande";
import CardPequeno from "./cardPequeno";
import imgCardSGC from "@/images/imgCardSGC.webp";
import imgCardComSisga from "@/images/imgCardComSisga.webp"

export default function CardsInicio() {
  return (
    <>
      <section className="flex justify-center items-center h-[70rem] md:h-[45rem] intersect:motion-preset-slide-up motion-delay-100">
        <CardPequeno
          ordem="textoImagem"
          titulo="SGC: Controle todo o seu negócio em uma única plataforma."
          descricao="Simplifique agora a gestão da sua empresa com software personalizado Comsystem. Com o sistema SGC Comsystem você terá acesso a todas as ferramentas necessárias para gerenciar sua empresa de forma eficiente."
          vantagens={true}
          vantagemUm="Gestão de vendas."
          vantagemDois="Controle de estoque."
          vantagemTres="Emissão de documentos fiscais e controle de notas destinadas."
          vantagemQuatro="Sistema acessível em qualquer lugar, a qualquer momento."
          imagem={imgCardSGC}
        />
      </section>
      <section className="flex justify-center items-center h-[70rem] intersect:motion-preset-slide-up motion-delay-300">
        <CardGrande />
      </section>
      <section className="flex justify-center h-[70rem] md:h-[50rem] intersect:motion-preset-slide-up motion-delay-500">
        <CardPequeno
          ordem="imagemTexto"
          titulo="ComSISGA"
          descricao="Software de gestão para agronegócio com controle administrativo e financeiro completo, de forma fácil e rápida, até mesmo por dispositivos móveis. Por ele você pode gerenciar:"
          vantagens={true}
          vantagemUm="Gestão de custos de maquinários e todo o patrimônio."
          vantagemDois="Controlar o estoque de insumos, grão e pecuária."
          vantagemTres="Controlar pedidos de compras e saldo de entrega"
          vantagemQuatro="Livro caixa do produtor rural"
          imagem={imgCardComSisga}
        />
      </section>
    </>
  );
}
