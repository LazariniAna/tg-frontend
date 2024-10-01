import { useState, useEffect, TouchEventHandler, MouseEventHandler } from 'react';

const OrderStudentsModal = ({ isOpenModal, setIsOpenModal, orderSelectedList, setOrderSelectedList }: { isOpenModal: boolean, setIsOpenModal: any, orderSelectedList: any, setOrderSelectedList: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [valuesModal, setValuesModal] = useState([
        {
            name: 'Alunos: A-Z',
            key: 1,
            selected: true
        },
        {
            name: 'Alunos Z-A',
            key: 2,
            selected: false
        },
        {
            name: 'Hipótese: pré-silábica primeiro',
            key: 3,
            selected: false
        },
        {
            name: 'Hipótese alfabética primeiro',
            key: 4,
            selected: false
        },
        {
            name: 'Observação',
            key: 5,
            selected: false
        },

    ]);

    const closeModal = () => {
        setIsOpen(false);
        isOpenModal = false;
        setIsOpenModal(false);
    };

    useEffect(() => {
        setIsOpen(isOpenModal);
        if (!isOpenModal) {
            setModalY(0);
        }
    }, [isOpenModal]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest('.relative')) {
                closeModal();
            }
        };

        const handleMove = (clientY: number) => {
            if (startY !== 0 && isOpen) {
                const deltaY = clientY - startY;
                setModalY(Math.max(0, deltaY));
            }
        };

        const handleEnd = () => {
            if (startY !== 0 && isOpen) {
                setStartY(0);
                if (modalY > window.innerHeight * 0.1) {
                    closeModal();
                }
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            handleMove(event.touches[0].clientY);
        };

        const handleMouseMove = (event: MouseEvent) => {
            handleMove(event.clientY);
        };

        const handleTouchEnd = () => {
            handleEnd();
        };

        const handleMouseUp = () => {
            handleEnd();
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('mouseup', handleMouseUp);
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, startY, modalY, closeModal]);

    const handleStart = (clientY: number) => {
        setStartY(clientY - modalY);
    };

    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
        const target = event.target as HTMLElement;
        if (target.classList && target.classList.contains('draggable')) {
            handleStart(event.touches[0].clientY);
        }
    };

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
        if ((event.target as HTMLElement).classList.contains('draggable')) {
            handleStart(event.clientY);
        }
    };

    function handleOrder(key: number) {
        const updatedValuesModal = valuesModal.map(value => ({
            ...value,
            selected: value.key === key
        }));

        const selectedOption = updatedValuesModal.find(value => value.key === key);

        setValuesModal(updatedValuesModal);
        setOrderSelectedList(selectedOption);
        closeModal();
    }

    return (
        <div className="fixed bottom-0 z-100 left-0 right-0 flex items-end justify-end pointer-events-none" style={{ display: isOpen ? '' : 'none' }}>
            <div className="fixed inset-0 transition-opacity pointer-events-auto">
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className={`relative bottom-0 bg-white rounded-t-3xl max-sm:w-full max-lg:w-2/3 w-80/100 pointer-events-auto flex items-center justify-center flex-col`} style={{ top: modalY }} onTouchStart={handleTouchStart} onMouseDown={handleMouseDown}>
                <div className='px-4 w-1/3 py-5 flex items-center justify-center draggable'>
                    <hr className='w-full bg-lightGray rounded-full draggable' style={{ border: '2px solid #E3E4E5' }} />
                </div>
                <div className=' w-full flex items-center justify-center font-bold'>
                    Ordenar por
                </div>
                {
                    valuesModal.map((value, index) => (
                        <>
                            <div className="py-2 px-3 flex justify-between w-11/12">
                                {value.name}
                                <div className={`w-6 h-6 flex items-center justify-center rounded-full`} style={{ border: '2px solid #A6A9AD' }} onClick={() => { handleOrder(value.key) }}>
                                    {
                                        value.selected ? <div className={`w-3 h-3 rounded-full bg-tertiary`}></div> : null
                                    }

                                </div>
                            </div>
                            {
                                index < valuesModal.length - 1 ?
                                    <div className=' w-full flex items-center justify-center'>
                                        <hr className='w-11/12 bg-lightGray rounded-full' style={{ border: '2px solid #E3E4E5' }} />
                                    </div>
                                    : null
                            }
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default OrderStudentsModal;
