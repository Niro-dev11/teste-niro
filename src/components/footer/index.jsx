import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { pegarAnoAtual } from "@/lib/anoAtual";
import Logo from "../logo";
export const revalidate = 3600;
export default function Footer({ tabAtiva }) {
  return (
    <>
      <footer className="bg-[--secondary] text-white">
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 py-6 lg:place-items-center">
          <div className="flex pl-5 items-center">
            <div className="w-72 flex flex-col gap-2">
              <Logo />
              <p>
                Com {pegarAnoAtual() - 1993} anos de experiência no mercado , a
                COMSYSTEM é líder em inovação em tecnologia móvel para gestão
                completa.
              </p>
            </div>
          </div>

          <div className="flex pl-5 items-center">
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="https://www.instagram.com/comsystemoficial/"
                  target="_blank"
                  className="flex gap-1 hover:text-[--quartile]"
                >
                  <Instagram />
                  comsystemoficial
                </a>
              </li>
              <li>
                <a
                  href="tel:+556732914114"
                  className="flex gap-1 hover:text-[--quartile]"
                >
                  <Phone />
                  (67) 3291-4114
                </a>
              </li>
              <li>
                <a
                  href="mailto:sac@comsysteminformatica.com.br"
                  className="flex gap-1 hover:text-[--quartile]"
                >
                  <Mail />
                  sac@comsysteminformatica.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="flex pl-5 items-center">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className={
                    tabAtiva === "inicio"
                      ? "text-[--quartile]"
                      : "hover:text-[--quartile]"
                  }
                >
                  Início
                </Link>
              </li>
              <li>
                <a
                  href="https://lojacomsystem.com.br/"
                  className="hover:text-[--quartile]"
                >
                  Loja
                </a>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className={
                    tabAtiva === "servicos"
                      ? "text-[--quartile]"
                      : "hover:text-[--quartile]"
                  }
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/quemSomos"
                  className={
                    tabAtiva === "quemSomos"
                      ? "text-[--quartile]"
                      : "hover:text-[--quartile]"
                  }
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className={
                    tabAtiva === "contato"
                      ? "text-[--quartile]"
                      : "hover:text-[--quartile]"
                  }
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/lojaApps"
                  className={
                    tabAtiva === "lojaApps"
                      ? "text-[--quartile]"
                      : "hover:text-[--quartile]"
                  }
                >
                  Loja de Aplicativos
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center border-t h-24 flex justify-center flex-col px-3">
          <p>Copyright @ {pegarAnoAtual()} - Comsystem - 37.556.958/0001-73</p>
          <p>
            RUA JOAQUIM CARDEAL DE SOUZA, N. 280, Bairro Flávio Garcia, Coxim -
            MS
          </p>
        </section>
      </footer>
    </>
  );
}
