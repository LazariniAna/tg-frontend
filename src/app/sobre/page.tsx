'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Link from "next/link";
declare global {
    interface Document {
        title: string;
    }
    interface Window {
    }
}

export default function Sobre() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    return (
        <Content>
            <div className="w-11/12 py-5 flex justify-center items-center flex-col gap-10">
                <div className="w-full flex flex-col justify-center items-center ">
                    <h1 className="text-5xl font-bold text-center text-purpleDark">
                        Colégio Sol
                    </h1>
                    <h1 className="text-3xl font-bold text-center text-gray-400">
                        Há 19 anos lapidando mentes brilhantes!
                    </h1>
                    <h1 className="text-3xl font-bold text-center text-gray-400">
                        BLOCO DE IMAGENS
                    </h1>
                </div>
                <span className="w-3/5 text-purple text-xl">
                    Em 2005, um sonho floresceu no coração de Fabiana, uma jovem de 24 anos. Impulsionada por um desejo ardente de transformar a educação infantil, ela deu vida ao nosso colégio, um projeto que logo se tornaria realidade com o apoio incondicional de Conceição Castro, sua mãe e primeira investidora.
                    <br></br><br></br>
                    Com o passar dos anos, o sonho de Fabiana se expandiu. Em 2013, o fundamental 1 foi inaugurado, marcando um novo capítulo em nossa história. Anderson, o marido de Fabiana, uniu-se à missão, tornando-se sócio da empresa e fortalecendo ainda mais nossa caminhada.
                    <br></br><br></br>
                    Em 2017, o ensino fundamental 2 foi inaugurado, consolidando nossa posição como referência em educação de qualidade.
                    <br></br><br></br>
                    E a história não para por aí! Em 2025, inauguraremos a unidade 2, ampliando nossos horizontes e oferecendo ensino médio e pré-vestibular.
                    <br></br><br></br>
                    Nossa jornada é guiada por um profundo amor pela educação e pela certeza de que cada criança e adolescente possui um potencial único a ser desabrochado. Através da experiência como pais de Fernanda e Manuela, (filhas dos nossos diretores) compreendemos as necessidades e expectativas das famílias que confiam em nós.
                    <br></br><br></br>
                    Mais do que uma escola, somos um lar onde sonhos são nutridos, talentos são lapidados e o futuro é construído com mãos dedicadas e corações apaixonados. Acreditamos que a educação é a chave para um mundo melhor, e nos dedicamos incansavelmente para que cada aluno possa trilhar seu caminho com sucesso e realização.
                    <br></br><br></br>
                    <span className="text-purpleDark text-4xl w-full flex justify-center items-center">Venha fazer parte da nossa história!</span>
                </span>
            </div>
            {loading && <LoadingOverlay />}
        </Content>

    )
}