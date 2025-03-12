import Image from "next/image";
import logoComsystem from "@/images/logo-comsystem.webp";

export default function Logo() {
  const logoUrl = logoComsystem.src;

  return (
    <picture>
      <source
        srcSet={logoUrl}
        media="(min-width: 1024px)"
        width={280}
        height={122}
      />
      <Image
        src={logoUrl}
        alt="Logo Comsystem"
        width={140}
        height={61}
        quality={100}
      />
    </picture>
  );
}
