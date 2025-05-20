'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import Smile from "../assets/smile.png"
import Books from "../assets/books.png"
import HandsPen from "../assets/handsPen.png"
import Pencil from "../assets/pencil.png"
import React, { useEffect, useLayoutEffect, useState } from "react";
import StoryModal from "@/components/Modal/storyModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Head from 'next/head';
import imageSchool from '../assets/escola.png';
import imageCoc from '../assets/coc.jpg'; // ✅ Importação corrigida
import Link from "next/link";

declare global {
  interface Document {
    title: string;
  }
  interface Window { }
}

export default function Home() {
  const router = useRouter();
  const [imagesList, setImagesList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openStory, setOpenStory] = useState<boolean>(false);

  return (
    <Content>
      <div className="w-11/12 pt-5 flex justify-center items-center flex-col gap-10">
        <div className="flex w-full justify-around items-start">
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold text-center text-gray-500">
              <span>Há mais de 30 anos formando cidadãos para o <p className="text-purpleDark">futuro.</p></span>
            </h1>
          </div>
        </div>


        {/* Blocos de Local e Sistema de Ensino */}
        <div className="flex w-full justify-around items-start flex-wrap">
          {/* Unidade 1 */}
          <Link
            href="https://www.google.com/maps/place/Col%C3%A9gio+Soberano/@-20.525464,-47.3872298,776m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94b0a61379ffff45:0x400f453283f5cb0c!8m2!3d-20.525469!4d-47.3846549"
            className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark"
          >
            <Image
              src={imageSchool}
              alt="Colégio"
              className="w-[500px] h-[300px] object-cover rounded-3xl hover:scale-105 transition"
            />
            <div className="flex text-center items-center">
              <h1 className="text-2xl mr-2 font-bold">Endereço -</h1>
              <p className="mr-2">Rua dos pinheiros, 1830, Centro, Franca-SP</p>
            </div>
            <p className="text-center">
              Uma estrutura completa para alunos do maternal ao nono ano.
            </p>
          </Link>

          {/* Sistema de Ensino - COC */}
          <div className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark">
            <Image
              src={imageCoc}
              alt="Sistema de Ensino"
              className="w-[500px] h-[300px] object-cover rounded-3xl hover:scale-105 transition"
            />
            <div className="flex text-center items-center">
              <h1 className="text-2xl mr-2 font-bold">É Sistema de Ensino COC -</h1>
              <p className="mr-2">o futuro está ao seu alcance!</p>
            </div>
            <p className="text-center">
              Garanta uma evolução de qualidade e inovadora.
            </p>
          </div>
        </div>


        <div className="flex w-full justify-center items-start">
          <div className="flex mt-4">
            {/* Botão Novidades */}
            <div
              className="flex mx-3 max-w-24 flex-col justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150"
              onClick={() => {
                setImagesList([{ url: 'src/assets/story.jpg', duration: 15000 }]);
                setOpenStory(!openStory);
              }}
            >
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg">
                <Image src={Smile} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="text-center">Novidades</div>
            </div>

            {/* Botão Área do Aluno */}
            <div
              className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150"
              onClick={() => router.push('https://sponte.sponte.com.br/auth/login')}
            >
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg">
                <Image src={HandsPen} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="text-center">Área do aluno</div>
            </div>

            {/* Botão Calendário Escolar */}
            <div
              className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150"
              onClick={() => router.push('/')}
            >
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg">
                <Image src={Pencil} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="text-center">Calendário escolar</div>
            </div>

            {/* Botão Matrículas */}
            <div
              className="flex mx-3 flex-col max-w-28 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150"
              onClick={() => router.push('/')}
            >
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg">
                <Image src={Books} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="text-center">Matrículas</div>
            </div>
          </div>
        </div>


        {/* Missão, Visão e Valores */}
        <div className="w-full flex flex-wrap justify-around p-5">
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className="text-2xl">Missão</h1>
            Promover o desenvolvimento integral dos alunos, estimulando o pensamento crítico, a criatividade e a responsabilidade social. Oferecer um ambiente acolhedor e seguro, onde cada aluno possa alcançar seu potencial máximo.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className="text-2xl">Visão</h1>
            Ser uma escola referência para aqueles que buscam educação de qualidade. Queremos formar cidadãos competentes, conscientes, compassivos, criativos e comprometidos.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className="text-2xl">Valores</h1>
            Valores: Respeito: Acreditamos no respeito aos alunos, familiares e colaboradores.
            Responsabilidade social: Valorizamos a formação de pessoas que atuam com responsabilidade, ética e respeito.

          </div>
        </div>

        <StoryModal isOpenModal={openStory} setIsOpenModal={setOpenStory} imagesList={imagesList} />
      </div>
      {loading && <LoadingOverlay />}
    </Content>
  );
}
