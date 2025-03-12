import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import notebookQuebrado from "@/images/notebookQuebrado.webp"

export default function NotFound() {
  return (
    <>
      <section className="grid md:grid-cols-2 h-[100vh]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="text-[--primary] font-bold text-8xl text-center">
              404
            </h1>
            <h2 className="text-[--primary] font-bold text-4xl text-center">
              ESSA PÁGINA NÃO EXISTE
            </h2>
          </div>
          <div>
            <Link href="/">
              <button className="bg-[--primary] text-white w-96 h-10 rounded">
                Voltar
              </button>
            </Link>
          </div>
          <div className="flex items-end">
            <Logo/>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={notebookQuebrado} alt="Notebook Quebrado" width={595} height={420} quality={100}/>
        </div>
      </section>
    </>
  );
}
