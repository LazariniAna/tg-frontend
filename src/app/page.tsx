'use client'
import Content from "@/components/Content";
import { baloo_2 } from "@/utils/fonts";
import Smile from "../assets/smile.png";
import Books from "../assets/books.png";
import HandsPen from "../assets/handsPen.png";
import HomeBg from "../assets/bg-home.png";
import React, { useState } from "react";
import StoryModal from "@/components/Modal/storyModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/Loading";
import Head from 'next/head';
import imageSchool from '../assets/escola.png';
import imageCoc from '../assets/coc.jpg';
import Link from "next/link";

const teamMembers = [
  { name: "Ana Paula Silva", role: "Coordenadora Pedagógica", img: "/team/ana.jpg" },
  { name: "Carlos Eduardo", role: "Professor de Matemática", img: "/team/carlos.jpg" },
  { name: "Mariana Souza", role: "Professora de Português", img: "/team/mariana.jpg" },
];

const testimonials = [
  {
    name: "João Pedro",
    relation: "Pai do aluno Lucas",
    message: "O Colégio Soberano transformou a educação do meu filho. Ambiente seguro e professores dedicados!",
  },
  {
    name: "Fernanda Lima",
    relation: "Ex-aluna",
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
      <div className="w-full pt-5 flex justify-center items-center flex-col gap-10 rounded-3xl">

        <div className="relative w-full">
          {/* <div className="absolute inset-0 -z-10 overflow-hidden h-[700px] ">
            <svg viewBox="0 0 1440 320" className="w-full h-full transform scale-y-[-1]">
              <path
                fill="#7c3bc18f"
                fillOpacity="1"
                d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              />
            </svg>

          </div> */}

          <div className="flex w-full justify-around items-start z-10 relative">
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-center text-gray-700">
                <span>Há mais de 30 anos formando cidadãos para o <p className="text-purpleDark">futuro.</p></span>
              </h1>
              <p className="mt-4 text-center max-w-xl text-gray-600">
                Um ambiente acolhedor que estimula o pensamento crítico, criatividade e responsabilidade social para todas as idades.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-around items-start flex-wrap gap-8 mt-12 z-10 relative">
            <Link
              href="https://www.google.com/maps/place/Col%C3%A9gio+Soberano/@-20.525464,-47.3872298,776m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94b0a61379ffff45:0x400f453283f5cb0c!8m2!3d-20.525469!4d-47.3846549"
              className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark shadow-lg rounded-3xl hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={imageSchool}
                alt="Colégio Soberano"
                className="w-full h-[300px] object-cover rounded-3xl"
              />
              <div className="flex text-center items-center mt-4">
                <h1 className="text-2xl mr-2 font-bold">Endereço -</h1>
                <p className="mr-2">Rua dos Pinheiros, 1830, Centro, Franca-SP</p>
              </div>
              <p className="text-center mb-6 px-4">
                Uma estrutura completa para alunos do maternal ao nono ano, com espaços modernos e seguros.
              </p>
            </Link>

            <div className="sm:max-w-2/5 sm:w-2/5 w-full flex flex-col justify-center items-center text-purpleDark shadow-lg rounded-3xl hover:scale-105 transition-transform duration-300">
              <Image
                src={imageCoc}
                alt="Sistema de Ensino COC"
                className="w-full h-[300px] object-cover rounded-3xl"
              />
              <div className="flex text-center items-center mt-4">
                <h1 className="text-2xl mr-2 font-bold">Sistema de Ensino COC -</h1>
                <p className="mr-2">O futuro está ao seu alcance!</p>
              </div>
              <p className="text-center mb-6 px-4">
                Garanta uma evolução educacional de qualidade, inovadora e alinhada às necessidades do mercado.
              </p>
            </div>
          </div>
        </div>

        {/* ====== Restante do Conteúdo ====== */}
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

        <section className="w-full max-w-5xl text-purpleDark mt-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={baloo_2.style}>Parte da Nossa Equipe</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {teamMembers.map((member) => (
              <div key={member.name} className="max-w-xs text-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto shadow-lg"
                />
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm italic">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl text-purpleDark mt-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={baloo_2.style}>Depoimentos</h2>
          <div className="space-y-6">
            {testimonials.map(({ name, relation, message }) => (
              <blockquote
                key={name}
                className="border-l-4 border-purpleDark pl-4 italic text-gray-700 bg-purple-50 rounded-lg p-4 shadow-sm"
              >
                <p>"{message}"</p>
                <footer className="mt-2 font-semibold text-right text-purpleDark">
                  — {name}, <span className="font-normal">{relation}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-wrap justify-around p-5 mt-16 bg-purple-50 rounded-xl shadow-md">
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center p-4">
            <h1 style={baloo_2.style} className="text-2xl mb-3 font-bold">Missão</h1>
            Promover o desenvolvimento integral dos alunos, estimulando o pensamento crítico, a criatividade e a responsabilidade social.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center p-4">
            <h1 style={baloo_2.style} className="text-2xl mb-3 font-bold">Visão</h1>
            Ser referência em educação de qualidade, reconhecida por formar cidadãos conscientes e preparados para os desafios do século XXI.
          </div>
          <div className="sm:max-w-2/5 sm:w-2/5 w-full text-purple text-center p-4">
            <h1 style={baloo_2.style} className="text-2xl mb-3 font-bold">Valores</h1>
            <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
              <li>Respeito a todos os alunos, familiares e colaboradores.</li>
              <li>Responsabilidade social e ética em todas as ações.</li>
              <li>Compromisso com a qualidade e a inovação.</li>
              <li>Incentivo à criatividade e ao pensamento crítico.</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="w-full mt-16 bg-purpleDark text-white p-8 flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">Colégio Soberano</h2>
        <p>Rua Minas Gerais, 1830, Vila aparecida, Franca-SP</p>
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
