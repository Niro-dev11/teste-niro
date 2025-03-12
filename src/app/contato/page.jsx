import Footer from "@/components/footer";
import FormContato from "@/components/formContato";
import Header from "@/components/header";
import Localizacao from "@/components/localizacao";
import Secao from "@/components/secao";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  return (
    <>
      <Header tabAtiva="contato" />
      <main>
        <Secao titulo="Contato" />
        <section className="flex justify-center items-center h-[30rem]">
          <div className="grid md:grid-cols-2 container">
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-5xl text-[--primary] font-bold my-10">
                Acesse-nos Aqui
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-1">
                  <MapPin/>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Joaquim+Cardeal+de+Souza,+280+Bairro+Flávio+Garcia,+Coxim,+MS"
                    target="_blank"
                    className="text-[--primary]"
                  >
                    RUA JOAQUIM CARDEAL DE SOUZA, N. 280 Bairro Flávio Garcia,
                    Coxim – MS
                  </a>
                </li>
                <li className="flex gap-1">
                  <Phone />
                  <a href="tel:+556732914114" className="text-[--primary]">
                    (67) 3291-4114
                  </a>
                </li>
                <li className="flex gap-1">
                  <Mail />
                  <a
                    href="mailto:sac@comsysteminformatica.com.br"
                    className="text-[--primary]"
                  >
                    sac@comsysteminformatica.com.br
                  </a>
                </li>
                <li className="flex gap-1">
                  <Instagram />
                  <a
                    href="https://www.instagram.com/comsystemoficial/"
                    className="text-[--primary]"
                  >
                    comsystemoficial
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-5xl text-[--primary] font-bold my-10">
                Horário de Funcionamento
              </h2>
              <div>
                <p className="sm:text-lg text-[--secondary]">
                  <strong>Segunda – Sexta:</strong> 07:00 – 11:00 e 13:00 –
                  17:00
                </p>
                <p className="sm:text-lg text-[--secondary]">
                  <strong>Sábado:</strong> 07:00 – 11:00
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center h-[50rem]">
          <div className="container intersect:motion-preset-slide-up motion-delay-0">
            <h2 className="text-3xl sm:text-5xl text-[--primary] font-bold my-10 text-center">
              Onde Estamos Localizados
            </h2>
            <Localizacao />
          </div>
        </section>
            <FormContato />
      </main>
      <Footer tabAtiva="contato" />
    </>
  );
}
