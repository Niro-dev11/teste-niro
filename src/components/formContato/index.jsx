"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { formatar } from "@/lib/react-format";
import Notificacao from "../notificacao";
import Loading from "../loading";

export default function FormContato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [notificacao, setNotificacao] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleTelefone(e) {
    let obj = formatar(e.target, "celular");

    setTelefone(obj.texto);
  }

  function enviarEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      nome: nome,
      telefone: telefone,
      cidade: cidade,
      email: email,
      mensagem: mensagem,
    };

    emailjs
      .send(
        "service_6jow5sn",
        "template_2w6r9pr",
        templateParams,
        "XNwpiLVCwVkdV7ami"
      )
      .then(() => {
        setNome("");
        setTelefone("");
        setCidade("");
        setEmail("");
        setMensagem("");
        setNotificacao("sucesso");
        setIsLoading(false);
      })
      .catch(() => {
        setNotificacao("erro");
      });
  }

  return (
    <>
      <section className="absolute right-10 z-10">
        {notificacao === "sucesso" && (
          <Notificacao tipo="sucesso" texto="E-mail enviado com sucesso !" />
        )}
        {notificacao === "erro" && (
          <Notificacao tipo="erro" texto="Erro ao enviar o e-mail" />
        )}
      </section>
      <section className="flex  flex-col items-center justify-center h-[50rem] intersect:motion-preset-slide-up motion-delay-300">
        <div>
          <h2 className="text-3xl sm:text-5xl text-[--primary] font-bold my-10 text-center">
            Envie-nos Uma Mensagem
          </h2>
          <form onSubmit={enviarEmail} className="w-full flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="nome"
                className="font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Nome
              </label>

              <input
                type="text"
                id="nome"
                className="border h-9 rounded pl-1 "
                required
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="telefone"
                className="font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                className="border h-9 rounded pl-1"
                required
                onChange={handleTelefone}
                value={telefone}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="cidade"
                className="font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Cidade
              </label>
              <input
                type="text"
                id="cidade"
                className="border h-9 rounded pl-1 "
                required
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="border h-9 rounded pl-1"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="mensagem"
                className="font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                className="border rounded pl-1 resize-none h-28"
                required
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              />
            </div>
            {isLoading ? <Loading/> : (
            <button
              type="submit"
              className="bg-[--primary] text-white h-10 rounded font-bold"
            >
              Enviar
            </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
