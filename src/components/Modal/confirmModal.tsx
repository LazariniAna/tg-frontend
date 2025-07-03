'use client';
import { useState, useEffect } from 'react';
import Close from "../../assets/close.svg";
import Image from 'next/image';
import { Button } from '../Button';

const ConfirmModal = ({ isOpenModal, setIsOpenModal, allow, setAllow }: { isOpenModal: boolean, setIsOpenModal: any, allow: boolean, setAllow: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        isOpenModal = false;
        setIsOpenModal(false);
    };
    const allowNext = (allow: boolean) => {
        setAllow(allow);
        allow = allow;
        closeModal();
    };

    useEffect(() => {
        setIsOpen(isOpenModal);
    }, [isOpenModal]);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!event.target.closest('.relative')) {
                closeModal();
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, closeModal]);

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>
            <div className="relative max-h-[500px] bg-white rounded-md max-w-screen-md w-1/3 max-lg:w-11/12 p-3 overflow-auto">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex items-end justify-end font-bold' onClick={closeModal}>
                        <Image src={Close} alt='Fechar' className="cursor-pointer w-6" />
                    </div>
                    <div className='w-full flex items-center justify-center font-bold py-2 '>
                        Tem certeza?
                    </div>
                    <div className='w-full flex items-center justify-center py-2 text-justify'>
                        Essa ação perderá as alterações realizadas.
                    </div>
                    <div className='flex max-xs:flex-col max-xs:items-center w-10/12 justify-between'>
                        <Button type="button" size="small" color="white" style={{ border: '2px solid black', minWidth: '176px', margin: '4px' }} onClick={() => {
                            allowNext(false)
                        }}>
                            CANCELAR
                        </Button>
                        <Button type="button" size="small" color="black" fill='filled' style={{ border: '2px solid black', minWidth: '176px', margin: '4px' }} onClick={() => allowNext(true)}>
                            PROSSEGUIR
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
