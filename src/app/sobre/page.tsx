'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo-sob.jpg"
declare global {
    interface Document {
        title: string;
    }
    interface Window {
    }
}

export default function Sobre() {
    return (
        <Content>
            <div className="relative w-full py-5 flex justify-center items-center flex-col ">
                <div className="absolute top-[-30px] left-0 w-full overflow-hidden leading-[0] rotate-180 flex flex-col z-[-1]">
                    <svg
                        className="relative block w-[calc(100%+1.3px)] h-[700px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 700"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 C150,100 350,100 500,200 C650,300 850,300 1200,200 L1200,680 L0,680 Z"
                            fill="#ab81f4a9"
                        />
                    </svg>
                </div>
                <div className="w-full flex flex-col justify-center items-center ">
                    <h1 className=" text-center font-bold text-4xl text-purpleDark" style={baloo_2.style}>
                        Há 19 anos lapidando mentes brilhantes!
                    </h1>
                    {/* <Image alt="logo" src={Logo} height={200} /> */}
                </div>
                <span className="w-5/8 text-black text-xl shadow-md p-6  rounded-md">
                    Em 2005, um sonho floresceu no coração de Fabiana, uma jovem de 24 anos. Impulsionada por um desejo ardente de transformar a educação infantil, ela deu vida ao nosso colégio, um projeto que logo se tornaria realidade com o apoio incondicional de Conceição Castro, sua mãe e primeira investidora.
                    <br></br><br></br>
                    Com o passar dos anos, o sonho de Fabiana se expandiu. Em 2008, o fundamental 1 foi inaugurado, marcando um novo capítulo em nossa história. Anderson, o marido de Fabiana, uniu-se à missão, tornando-se sócio da empresa e fortalecendo ainda mais nossa caminhada.
                    <br></br><br></br>
                    Em 2009, o ensino fundamental 2 foi inaugurado, consolidando nossa posição como referência em educação de qualidade.
                    <br></br><br></br>
                    E a história não para por aí! Em 2027, inauguraremos a unidade 2, ampliando nossos horizontes e oferecendo ensino médio e pré-vestibular.
                    <br></br><br></br>
                    Nossa jornada é guiada por um profundo amor pela educação e pela certeza de que cada criança e adolescente possui um potencial único a ser desabrochado. Através da experiência como pais de Maria, (filha dos nossos diretores) compreendemos as necessidades e expectativas das famílias que confiam em nós.
                    <br></br><br></br>
                    Mais do que uma escola, somos um lar onde sonhos são nutridos, talentos são lapidados e o futuro é construído com mãos dedicadas e corações apaixonados. Acreditamos que a educação é a chave para um mundo melhor, e nos dedicamos incansavelmente para que cada aluno possa trilhar seu caminho com sucesso e realização.
                    <br></br><br></br>
                    <span className="text-purpleDark text-4xl w-full flex justify-center items-center">Venha fazer parte da nossa história!</span>
                </span>
            </div>
        </Content >

    )
}