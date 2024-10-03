'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import Smile from "../assets/smile.png"
import Books from "../assets/books.png"
import HandsPen from "../assets/handsPen.png"
import Pencil from "../assets/pencil.png"
import React, { useEffect, useLayoutEffect, useState } from "react";
import Title from "@/components/Title/Title";
import { monthsOptionsDefault, story1,  } from "@/utils/const";
import StoryModal from "@/components/Modal/storyModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Head from 'next/head';
declare global {
  interface Document {
    title: string;
  }
  interface Window {
  }
}

export default function Home() {
  const router = useRouter();
  const [teacher, setTeacher] = useState<any>({});
  const [imagesList, setImagesList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openStory, setOpenStory] = useState<boolean>(false);

  return (
    <Content>
      <Head>
        <title>Meu Site - Página Inicial</title>
        <meta name="description" content="Bem-vindo à página inicial do meu site!" />
      </Head>
      <div className="w-full flex justify-center items-center flex-col mt-6 p-5 max-sm:p-1">
        <div className='flex max-sm:justify-center max-sm:items-center max-sm:w-full w-11/12 h-[50px] text-primary leading-10 text-[32px]'>
          <h1 style={baloo_2.style}>
            Olá, {teacher?.name?.split(' ')[0]}!
          </h1>
        </div>

        <div className="w-full mt-6 flex flex-wrap justify-around">
          <div className={`flex-col lg:w-2/5 w-full flex max-lg:justify-center max-lg:items-center`}>
            <div className={`w-full flex flex-col justify-center items-center`}>
              <h1 style={baloo_2.style} className="mb-4 flex items-start w-full max-sm:ml-4 sm:text-2xl max-sm:text-xl">
               texto
              </h1>
              <div className="flex  mt-4">
                <div className="flex mx-3 max-w-24 flex-col justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
                  setImagesList([
                    { url: 'src/assets/story.jpg', duration: 15000 },
                    
                  ])
                  setOpenStory(!openStory)
                }
                }>
                  <div className="rounded-full flex justify-center items-center bg-secondary w-[65px] h-[65px] hover:shadow-lg ">
                    <Image src={Smile} alt="" className="w-[43px] h-[43px]" />
                  </div>
                  <div className="fex items-center justify-center text-center">
                    home
                  </div>
                </div>
                <div className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
                  router.push('/')
                }
                }>
                  <div className="rounded-full flex justify-center items-center bg-secondary w-[65px] h-[65px] hover:shadow-lg ">
                    <Image src={HandsPen} alt="" className="w-[43px] h-[43px]" />
                  </div>
                  <div className="fex items-center justify-center text-center">
                    texto
                  </div>
                </div>
                <div className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
                  router.push('/')
                }
                }>
                  <div className="rounded-full flex justify-center items-center bg-secondary w-[65px] h-[65px] hover:shadow-lg ">
                    <Image src={Pencil} alt="" className="w-[43px] h-[43px]" />
                  </div>
                  <div className="fex items-center justify-center  text-center">
                    texto
                  </div>
                </div>
                <div className="flex mx-3 flex-col max-w-28 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
                  router.push('/')
                }
                }>
                  <div className="rounded-full flex justify-center items-center bg-secondary w-[65px] h-[65px] hover:shadow-lg ">
                    <Image src={Books} alt="" className="w-[43px] h-[43px]" />
                  </div>
                  <div className="fex items-center justify-center text-center ">
                    texto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StoryModal isOpenModal={openStory} setIsOpenModal={setOpenStory} imagesList={imagesList} />
      </div>
      {loading && <LoadingOverlay />}
    </Content>

  )
}