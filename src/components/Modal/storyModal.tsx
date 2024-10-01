import { useState, useEffect, useCallback } from 'react';
import Stories from 'react-insta-stories';


const StoryModal = ({ isOpenModal, setIsOpenModal, imagesList }: { isOpenModal: boolean, setIsOpenModal: any, imagesList:any }) => {
    const [key, setKey] = useState(0);  
    const closeModal = useCallback(() => {
        setIsOpenModal(false);
    }, [setIsOpenModal]);

    useEffect(() => {
        if (isOpenModal) {
            setKey(prevKey => prevKey + 1);
        }
    }, [isOpenModal]);

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (!event.target.closest('.relative')) {
                closeModal();
            }
        };
        if (isOpenModal) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpenModal, closeModal]);

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center" style={{ display: isOpenModal ? 'flex' : 'none' }}>
            <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>
            <div className="relative bg-white rounded-md overflow-auto">
                <div className='w-full flex flex-col justify-center items-center'>
                    {isOpenModal && imagesList &&(
                        <Stories
                            key={key}
                            stories={imagesList}
                            defaultInterval={3000}
                            onAllStoriesEnd={closeModal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoryModal;
