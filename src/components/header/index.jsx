"use client";
import Link from "next/link";
import Logo from "../logo";
import { Menu, X, Instagram, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Header({ tabAtiva }) {
  const [isMenuAberto, setIsMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function cliqueFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuAberto(false);
      }
    }

    if (isMenuAberto) {
      document.addEventListener("mousedown", cliqueFora);
    }
    return () => {
      document.removeEventListener("mousedown", cliqueFora);
    };
  }, [isMenuAberto]);

  function abrirMenu() {
    setIsMenuAberto(true);
  }

  function fecharMenu() {
    setIsMenuAberto(false);
  }

  return (
    <>
      <header className="flex justify-center intersect:motion-preset-slide-down motion-delay-0 relative z-10 px-4 lg:px-0">
        <nav className="container flex items-center py-4 justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <ul className="hidden lg:flex gap-8">
            <li className="text-lg">
              <Link
                href="/"
                className={
                  tabAtiva === "inicio"
                    ? "text-[--primary]"
                    : "hover:text-[--primary]"
                }
              >
                Início
              </Link>
            </li>
            <li className="text-lg">
              <a
                href="https://lojacomsystem.com.br/"
                target="_blank"
                className="hover:text-[--primary]"
              >
                Produtos
              </a>
            </li>
            <li className="text-lg">
              <Link
                href="/servicos"
                className={
                  tabAtiva === "servicos"
                    ? "text-[--primary]"
                    : "hover:text-[--primary]"
                }
              >
                Serviços
              </Link>
            </li>
            <li className="text-lg">
              <Link
                href="/quemSomos"
                className={
                  tabAtiva === "quemSomos"
                    ? "text-[--primary]"
                    : "hover:text-[--primary]"
                }
              >
                Quem Somos
              </Link>
            </li>
            <li className="text-lg">
              <Link
                href="/contato"
                className={
                  tabAtiva === "contato"
                    ? "text-[--primary]"
                    : "hover:text-[--primary]"
                }
              >
                Contato
              </Link>
            </li>
            <li className="text-lg">
              <Link
                href="/lojaApps"
                className={
                  tabAtiva === "lojaApps"
                    ? "text-[--primary]"
                    : "hover:text-[--primary]"
                }
              >
                Loja de Aplicativos
              </Link>
            </li>
          </ul>
          <section className="lg:hidden">
            <Menu onClick={abrirMenu} width={40} height={40} />
            {isMenuAberto === true && (
              <section
                className="flex justify-end fixed top-0 right-0 overflow-hidden motion-translate-x-in-100"
                id="menuLateral"
                ref={menuRef}
              >
                <X
                  width={40}
                  height={40}
                  onClick={fecharMenu}
                  className="text-[--secondary] motion-translate-x-in-100"
                />
                <div className=" bg-[--secondary] w-[55vw] sm:w-[40vw] md:w-[35vw] h-[100vh] px-4 py-20">
                  <ul className="flex flex-col gap-5 motion-translate-x-in-100">
                    <li className="text-white">
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
                    <li className="text-white">
                      <a
                        href="https://lojacomsystem.com.br/"
                        target="_blank"
                        className="hover:text-[--quartile]"
                      >
                        Produtos
                      </a>
                    </li>
                    <li className="text-white">
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
                    <li className="text-white">
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
                    <li className="text-white">
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
                    <li className="text-white">
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
                  <footer className="flex items-end h-3/5 motion-translate-x-in-100">
                    <ul className="flex flex-col gap-5 text-white">
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
                  </footer>
                </div>
              </section>
            )}
          </section>
        </nav>
      </header>
    </>
  );
}
