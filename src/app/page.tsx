'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import React, { useState } from "react";
import StoryModal from "@/components/Modal/storyModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Head from 'next/head';
import imageSchool from '../assets/escola.png';
import imageCoc from '../assets/coc2.jpg';
import Link from "next/link";

const testimonials = [
  {
    name: "Pai de aluno",
    message: "O Colégio Soberano transformou a educação do meu filho. Ambiente seguro e professores dedicados!",
  },
  {
    name: "Ex-aluna",
    message: "Aqui aprendi valores que levo para a vida. Sou muito grata à equipe e à metodologia aplicada.",
  },
];

export default function Home() {
  const router = useRouter();
  const [imagesList, setImagesList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openStory, setOpenStory] = useState<boolean>(false);

  return (
    <Content>
      <section className="relative bg-purple-100 pb-24">
        <div className="absolute top-[-10px] left-0 w-full overflow-hidden leading-[0] rotate-180 flex flex-col">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[560px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 560"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 C150,100 350,100 500,200 C650,300 850,300 1200,200 L1200,680 L0,680 Z"
              fill="#b6cbffa9"
            />
          </svg>
        </div>

        <div className="w-full pt-5 flex justify-center items-center flex-col gap-10">

          <div className="relative w-full">
            <div className="flex w-full justify-around items-start z-10 relative">
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-gray-700">
                  <span style={baloo_2.style}>Há mais de 19 anos formando cidadãos para o <p className="text-purpleDark">futuro.</p></span>
                </h1>
              </div>
            </div>

            <div className="flex w-full justify-around items-start flex-wrap gap-8 mt-6 z-10 relative">
              <Link
                href="https://www.google.com/maps/place/Col%C3%A9gio+Soberano/data=!4m2!3m1!1s0x0:0x400f453283f5cb0c?sa=X&ved=1t:2428&ictx=111"
                className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark shadow-lg rounded-3xl hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageSchool}
                  alt="Colégio Soberano"
                  className=" w-[600px] h-[275px]  object-cover rounded-3xl"
                />
                <div className="flex text-center items-center mt-4">
                  <h1 className="text-2xl mr-2 font-bold">Endereço -</h1>
                  <p className="mr-2 italic underline">Rua Rio Grande do Sul, 867, Vila aparecida, Franca-SP</p>
                </div>
                <p className="text-center mb-6 px-4">
                  Uma estrutura completa para alunos do maternal ao nono ano, com espaços modernos e seguros.
                </p>
              </Link>

              <div
                className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark shadow-lg rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={imageCoc}
                  alt="Sistema de Ensino"
                  width={600}
                  height={275}
                  className=" w-[600px] h-[275px] bg-cover rounded-3xl"
                />
                <div className="flex text-center items-center mt-4">
                  <h1 className="text-2xl mr-2 font-bold">É Sistema de Ensino COC -</h1>
                  <p className="mr-2">o futuro está ao seu alcance!</p>
                </div>
                <p className="text-center mb-12 px-4">
                  Garanta uma evolução de qualidade e inovadora.
                </p>
              </div>
            </div>
          </div>

          <section className="w-full max-w-5xl text-purpleDark">
            <h2 className="text-3xl font-bold text-center mb-8" style={baloo_2.style}>Por que escolher o Colégio Soberano?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="bg-purple-100 p-6 rounded-xl shadow-md bg-gradient-animated text-white">
                <h3 className="font-semibold mb-3">Equipe Qualificada</h3>
                <p>Professores experientes e apaixonados por educação, dedicados ao desenvolvimento integral dos alunos.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl shadow-md bg-gradient-animated text-white">
                <h3 className="font-semibold mb-3">Infraestrutura Moderna</h3>
                <p>Salas de aula equipadas, laboratórios de informática, biblioteca e espaços para atividades esportivas.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl shadow-md bg-gradient-animated text-white">
                <h3 className="font-semibold mb-3">Metodologia Inovadora</h3>
                <p>Aprendizado ativo e colaborativo, que estimula pensamento crítico e criatividade em todas as idades.</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-4xl  text-purpleDark mt-16 px-4 z-30">
            <h2 className="text-3xl font-bold text-center mb-8" style={baloo_2.style}>Depoimentos</h2>
            <div className=" bg-white z-30">
              {testimonials.map(({ name, message }) => (
                <blockquote
                  key={name}
                  className="border-l-4 border-purpleDark pl-4 italic text-gray-700 bg-purple-50 rounded-lg p-4 shadow-md "
                >
                  <p className="!bg-white">"{message}"</p>
                  <footer className="mt-2 font-semibold text-right text-purpleDark">
                    — {name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="w-full flex flex-wrap justify-around p-5 gap-10 mt-16 bg-purple-50 rounded-xl">
            <div className="sm:max-w-2/5 sm:w-2/5 w-full text-black text-center p-4 z-30 rounded-lg shadow-md ">
              <h1 style={baloo_2.style} className="text-2xl mb-3 font-bold">Missão</h1>
              Promover o desenvolvimento integral dos alunos, estimulando o pensamento crítico, a criatividade e a responsabilidade social. Oferecer um ambiente acolhedor e seguro, onde cada aluno possa alcançar seu potencial máximo.
            </div>
            <div className="sm:max-w-2/5 sm:w-2/5 w-full text-black text-center p-4 z-30 rounded-lg shadow-md ">
              <h1 style={baloo_2.style} className="text-2xl mb-3 font-bold">Visão</h1>
              Ser uma escola referência para aqueles que buscam educação de qualidade. Queremos formar cidadãos competentes, conscientes, compassivos, criativos e comprometidos.
            </div>
            <div className="sm:max-w-2/5 sm:w-2/5 w-full text-black text-center p-4 z-30 rounded-lg shadow-md ">
              <h1 style={baloo_2.style} className="text-2xl">Valores</h1>
              Respeito: Acreditamos no respeito aos alunos, familiares e colaboradores.
              Responsabilidade social: Valorizamos a formação de pessoas que atuam com responsabilidade, ética e respeito.
            </div>
          </section>
        </div>

        <div className="absolute bottom-[-13px]  left-0 w-full overflow-hidden leading-[0] flex flex-col z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-550px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 550"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 C150,100 350,100 500,200 C650,300 850,300 1200,200 L1200,680 L0,680 Z"
              fill="#ab81f4a9"
            />
          </svg>
        </div>
      </section>

      <footer className="w-full bg-gradient-animated-10s text-white p-8 flex flex-col items-center gap-4 rounded-t-2xl z-30">
        <h2 className="text-xl font-bold">Colégio Soberano</h2>
        <p>Rua Rio Grande do Sul, 867, Vila aparecida, Franca-SP, Brazil 14401-324</p>
        <p>Telefone: (16) 1234-5678 | Email: contato@colegiosoberano.com.br</p>
        <div className="flex gap-6 text-xl">
          <a href="https://facebook.com/colegiosoberano" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com/colegiosoberano" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <p className="text-sm mt-4">&copy; 2025 Colégio Soberano. Todos os direitos reservados.</p>
      </footer>

      {loading && <LoadingOverlay />}
      <StoryModal isOpenModal={openStory} setIsOpenModal={setOpenStory} imagesList={imagesList} />
    </Content>
  );
}
