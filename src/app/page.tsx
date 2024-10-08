'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import Smile from "../assets/smile.png"
import Books from "../assets/books.png"
import HandsPen from "../assets/handsPen.png"
import Pencil from "../assets/pencil.png"
import React, { useEffect, useLayoutEffect, useState } from "react";
import Title from "@/components/Title/Title";
import { monthsOptionsDefault, story1, } from "@/utils/const";
import StoryModal from "@/components/Modal/storyModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Head from 'next/head';
import imageSchool from '../assets/escola.png';
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
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex w-full ">
          <Image src={imageSchool} alt="Colégio"  layout="fill" objectFit="cover" className="max-h-[650px] rounded-3xl"/>
        </div>
        <div className="w-full mt-[700px] flex flex-wrap justify-around p-5">
          teste
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
                  <div className="rounded-full flex justify-center items-center bg-purpleDark w-[65px] h-[65px] hover:shadow-lg ">
                    <Image src={Smile} alt="" className="w-[43px] h-[43px]" />
                  </div>
                  <div className="fex items-center justify-center text-center">
                    story
                  </div>
                </div>
                <div className="flex mx-3 flex-col max-w-24 justify-start items-center cursor-pointer hover:scale-125 ease-in duration-150" onClick={() => {
                  router.push('/')
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
          </div>
        </div>
        <StoryModal isOpenModal={openStory} setIsOpenModal={setOpenStory} imagesList={imagesList} />
      </div>
      {loading && <LoadingOverlay />}
    </Content>

  )
}