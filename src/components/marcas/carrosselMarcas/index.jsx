"use client";
import { motion } from "framer-motion";
import { MarcasAPI } from "@/lib/marcas";
import Image from "next/image";

export default function CarrosselMarcas() {
  return (
    <>
      <section className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-36 flex-none pr-36"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...MarcasAPI, ...MarcasAPI].map((marca, index) => (
            <div key={index}>
              <Image src={marca.imagem} alt={marca.imagem} width={144} height={80}></Image>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
