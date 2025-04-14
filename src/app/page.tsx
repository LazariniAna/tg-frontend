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
import Link from "next/link";
declare global {
  interface Document {
    title: string;
  }
  interface Window {
  }
}

export default function Home() {
  const router = useRouter();
  const [imagesList, setImagesList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openStory, setOpenStory] = useState<boolean>(false);

  return (
    <Content>
      <div className="w-11/12 pt-5 flex justify-center items-center flex-col gap-10">
        {/* <div className="flex w-full ">
          <Image src={imageSchool} alt="Colégio"  layout="fill" objectFit="cover" className="max-h-[650px] rounded-3xl"/>
        </div> */}
        <div className="flex w-full justify-around items-start">
          <div className="w-full flex flex-col justify-center items-center ">

            <h1 className="text-4xl font-bold text-center text-gray-500">
              <span>Do Berçário ao Pré-Vestibular, guiando nossos alunos para uma <p className="text-purpleDark">jornada de sucesso.</p> </span></h1>
          </div>
        </div>
        <div className="flex w-full justify-center items-start">
          <div className="flex  mt-4">
            <div className="flex mx-3 max-w-24 flex-col justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
              setImagesList([
                { url: 'src/assets/story.jpg', duration: 15000 },

              ])
              setOpenStory(!openStory)
            }
            }>
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg ">
                <Image src={Smile} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="fex items-center justify-center text-center">
                Novidades
              </div>
            </div>
            <div className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
              router.push('https://sponte.sponte.com.br/auth/login')
            }
            }>
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg ">
                <Image src={HandsPen} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="fex items-center justify-center text-center">
                Área do aluno
              </div>
            </div>
            <div className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
              router.push('/')
            }
            }>
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg ">
                <Image src={Pencil} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="fex items-center justify-center  text-center">
                Calendário escolar
              </div>
            </div>
            <div className="flex mx-3 flex-col max-w-28 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
              router.push('/')
            }
            }>
              <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg ">
                <Image src={Books} alt="" className="w-[43px] h-[43px]" />
              </div>
              <div className="fex items-center justify-center text-center ">
                Matrículas
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around items-start flex-wrap">
          <Link href={"https://www.google.com/maps/place/Col%C3%A9gio+Soberano/@-20.525464,-47.3872298,776m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94b0a61379ffff45:0x400f453283f5cb0c!8m2!3d-20.525469!4d-47.3846549!16s%2Fg%2F11f31q9_b5?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"} className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark">
            <Image src={imageSchool} alt="Colégio" className="rounded-3xl max-w-full hover:scale-105" />
            <div className="flex text-center items-center">
              <h1 className="text-2xl mr-2 font-bold">Unidade 1 - </h1>
              <p className="mr-2">Rua dos pinheiros, 1830, Centro, Franca-SP</p>
            </div>
            <p className="text-center">
              Uma estrutura completa para alunos da
              Ed. Infantil até o Ensino Fundamental 2.
            </p>
          </Link>
          {/* <div className="m:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark">
            <Image src={imageSchool} alt="Colégio" className="rounded-3xl max-w-full" />
            <div className="flex text-center items-center">
              <h1 className="text-2xl font-bold">Unidade 2 </h1>
            </div>
            <p className="text-center">
              Em breve uma nova unidade!
            </p>
          </div> */}
        </div>
        <div className="w-full flex flex-wrap justify-around p-5">
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className=" w-full text-2xl">
              Missão
            </h1>
            Acreditamos que a educação é a chave para um futuro melhor. Nossa missão é através de um ensino forte e humano proporcionar um ambiente inclusivo e inspirador, onde cada aluno possa florescer e alcançar seu pleno potencial tornando-se cidadãos críticos e conscientes, fortalecidos de conhecimentos, habilidades e valores, que os capacitarão não apenas para os desafios do mundo atual, mas também para liderar a transformação de amanhã.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className=" w-full text-2xl">
              Visão
            </h1>
            O Colégio Sol vem para inovar o conceito de qualidade e atendimento, proporcionando ao aluno vivências que ficarão registradas em sua essência. Somos uma escola de alto conceito no ensino e na estrutura física, atendendo pessoas que valorizam a educação e a aprendizagem.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center">
            <h1 style={baloo_2.style} className=" w-full text-2xl">
              Valores
            </h1>
            Nossos valores são: gratidão, ética, comprometimento, valorização humana, melhoria contínua.
          </div>
        </div>
        <StoryModal isOpenModal={openStory} setIsOpenModal={setOpenStory} imagesList={imagesList} />
      </div>
      {loading && <LoadingOverlay />}
    </Content>

  )
}