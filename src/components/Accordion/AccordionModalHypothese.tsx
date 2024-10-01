import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../../assets/arrow-down-line.svg';

const AccordionHypothese: React.FC<{ title: string, childItem?: string, color?: string }> = ({ title, childItem, color }) => {
    const [isOpenHypothese, setIsOpenHypothese] = useState(false);
    return (
        <div className=' w-full flex-col flex'>
            <button
                className={`h-[32px] w-full flex justify-between items-center rounded mt-2 cursor-pointer ${color == '#FFFFFF' ? 'border border-black' : '' }`}
                style={{backgroundColor:color, border: color == '#FFFFFF' ? '1px solid black' : '' }}
                onClick={() => {
                    setIsOpenHypothese(!isOpenHypothese);
                }}
            >
                <div></div>
                <div className='font-bold ml-6'>
                    {title}
                </div>
                <div className={`mr-5 ${isOpenHypothese ? 'transform rotate-180' : ''} `}>
                    {<Image src={Arrow} alt="Logo" />}
                </div>
            </button>
            {isOpenHypothese && (
                <div className="p-2 text-justify ">
                    {childItem ?
                        <div dangerouslySetInnerHTML={{ __html: childItem }} />
                        : null}

                </div>
            )}
        </div>
    );
};


export { AccordionHypothese };
