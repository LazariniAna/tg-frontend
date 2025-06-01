'use client'
import { baloo_2 } from "@/utils/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import Content from "@/components/Content";
import MatriculaImg from "../../assets/matriculas.png"
import Image from "next/image";

export default function MatriculaPage() {
    const router = useRouter();

    return (
        <Content>
            <section className="relative w-full">
                <div className="absolute top-[-30px] left-0 w-full overflow-hidden leading-[0] rotate-180 flex flex-col  z-[-1]">
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

                <section className="min-h-screen bg-purple-50 flex flex-col items-center px-6 py-12">
                    <h1 style={baloo_2.style} className="text-4xl font-bold text-purpleDark text-center mb-8">
                        Matrículas Abertas!
                    </h1>

                    <p className="max-w-3xl text-center text-lg text-gray-700 mb-6">
                        Venha fazer parte do Colégio Soberano! Nossa equipe está preparada para oferecer um ensino de qualidade,
                        com uma estrutura moderna e acolhedora para alunos da Educação Infantil ao Ensino Fundamental.
                    </p>

                    <section className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full mb-10 flex">
                        <div>
                            <h2 className="text-2xl font-bold text-purpleDark mb-4">Documentos necessários:</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Certidão de nascimento do aluno (original e cópia);</li>
                                <li>Comprovante de residência atualizado;</li>
                                <li>RG e CPF do responsável;</li>
                                <li>Histórico escolar (em caso de transferência);</li>
                                <li>Caderneta de vacinação (para alunos da educação infantil).</li>
                            </ul>
                        </div>
                        <Image alt="matricula" src={MatriculaImg} width={300} />
                    </section>

                    <section className="text-center mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-purpleDark">Atendimento personalizado pelo WhatsApp</h2>
                        <p className="text-gray-700 mb-4">Clique no botão abaixo e fale com nossa equipe agora mesmo.</p>

                        <a
                            href="https://wa.me/5516123456789?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20matrículas%20do%20Colégio%20Soberano."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform duration-300 hover:scale-105"
                        >
                            Fale pelo WhatsApp
                        </a>
                    </section>

                    <Link href="/" className="text-purple-700 underline hover:text-purple-900 transition-colors duration-300">
                        ← Voltar para a página inicial
                    </Link>
                </section>
            </section>
        </Content>
    );
}
