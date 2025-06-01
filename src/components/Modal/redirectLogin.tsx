import Close from "../../assets/close.svg";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

export default function RedirectLogin({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const closeModal = () => {
        setIsOpen(false);
        isOpenModal = false;
        setIsOpenModal(false);
    };


    useEffect(() => {
        setIsOpen(isOpenModal);
    }, [isOpenModal]);


    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>
            <div className="relative max-h-[500px] bg-white rounded-md max-w-screen-md w-1/2 max-lg:w-11/12 p-3 overflow-auto">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex items-center justify-center font-bold py-2 '>
                        Você não está logado!
                    </div>
                    <div className='w-full flex items-center justify-center py-2 text-center'>
                        Por favor, realize o login ou cadastre-se caso seja sua primeira vez aqui! Bem-vindo!
                    </div>
                    <div className='flex max-sm:flex-col max-sm:items-center w-10/12 justify-center'>
                        <Button type="button" size="small" color="white" style={{ border: '2px solid black', minWidth: '176px', margin: '4px' }} onClick={() => {
                            router.push('/usuarios/cadastro')
                        }}>
                            Cadastre-se
                        </Button>
                        <Button type="button" size="small" color="black" fill='filled' style={{ border: '2px solid black', minWidth: '176px', margin: '4px' }} onClick={() => router.push('/login')}>
                            Ir para login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}