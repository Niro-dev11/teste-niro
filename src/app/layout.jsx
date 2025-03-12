import ObserverProvider from "./ObserverProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import logoComsystem from "@/images/logo-comsystem.webp"

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={inter.className}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Oferecemos suporte técnico, manutenção de computadores, redes e soluções de TI para empresas e residências. Atendimento rápido e eficiente."
        />
        <meta
          name="keywords"
          content="comsystem, comsystem informática, empresa de informática, suporte técnico, manutenção de computadores, redes, TI para empresas, tecnologia"
        />
        <meta name="author" content="Comsystem Informática" />
        <meta property="og:title" content="Comsystem Informática" />
        <meta
          property="og:description"
          content="Soluções de informática para empresas e residências. Suporte técnico, redes e manutenção."
        />
        <meta
          property="og:image"
          content={`https://www.comsysteminformatica.com.br/${logoComsystem}`}
        />
        <meta
          property="og:url"
          content={`https://www.comsysteminformatica.com.br/${logoComsystem}`}
        />
        <meta property="og:site_name" content="Comsystem Informática" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comsystem Informática" />
        <meta
          name="twitter:description"
          content="Soluções de informática para empresas e residências. Suporte técnico, redes e manutenção."
        />
        <meta
          name="twitter:image"
          content="https://www.comsysteminformatica.com.br/images/logo-comsystem.webp"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="geo.region" content="BR-MS" />
        <meta name="geo.placename" content="Coxim" />
        <meta name="geo.position" content="-18.506785; -54.749029" />
        <meta name="ICBM" content="-18.506785; -54.749029" />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Comsystem Informática</title>
      <ObserverProvider>
        <body className={`antialiased`}>
          {children}
        </body>
      </ObserverProvider>
    </html>
  );
}
