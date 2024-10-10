import React, { Component, useEffect, useState } from 'react';

import Stories from 'react-insta-stories';

export const Story = ({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: any }) => {
    const [key, setKey] = useState(0);

    const closeModal = () => {
        isOpenModal = false;
        setIsOpenModal(false);
    };


    useEffect(() => {
        if(isOpenModal)
        setKey(prevKey => prevKey + 1);
    }, [isOpenModal]);
    return (
            <Stories
                key={key}
                stories={[{ url: 'https://img.freepik.com/fotos-premium/casa-solitaria-no-deserto_1084818-5376.jpg?w=360', duration:3000,  }, { url: 'https://img.freepik.com/fotos-premium/casa-solitaria-no-deserto_1084818-5376.jpg?w=360', duration:3000  }]}
                defaultInterval={1500}
                width={'100%'}
                height={768}
                onAllStoriesEnd={closeModal}
            />
    );
};