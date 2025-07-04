'use client'
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Arrow from '../../assets/arrow-down-line.svg';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '@/redux/reducers/menuReducer';
import Alunos from "../../assets/users.svg"
import Scribble from "../../assets/scribble.svg"
import ChalkboardUser from "../../assets/chalkboard-user.svg"
import { cleanMockStatusValues } from '@/utils/helper';
import { teacherSaved } from '@/utils/const';

declare global {
    interface Window {

    }
}

const AccordionItem: React.FC<{ itemMenu?: any, title: string, icon?: string, children?: any, isDisabled?: boolean, url?: string }> = ({ title, children, icon, isDisabled, url, itemMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [iconSelected, setIconSelected] = useState<any>(<></>);
    const [isViewed, setIsViewed] = useState<boolean>(false);
    const [teacher, setTeacher] = useState(teacherSaved);
    useEffect(() => {
        switch (icon) {
            case 'users.svg':
                setIconSelected(Alunos);
                break;
            case 'scribble.svg':
                setIconSelected(Scribble)
                break;
            case 'chalkboard-user.svg':
                setIconSelected(ChalkboardUser)
                break;

        }
        const urls = children?.map((item: any) => item.props.url).filter((url: string) => url !== '/');
        if (urls?.includes(window.location.pathname)) {
            setIsViewed(true)
        }
        if (url && url == window.location.pathname) setIsViewed(true)
        setTeacher(teacherSaved)
    }, [])

    useEffect(() => {
        setTeacher(teacherSaved)
    }, [teacherSaved])

    return (
        <div className={`${itemMenu.onlyAdm && !teacher.admin && 'hidden'} relative  max-sm:pt-1 pl-3 max-sm:border-t-2  max-sm:border-gray-300 sm:w-1/2`}
            onMouseLeave={() => setIsOpen(false)}
        >

            <button
                className="w-full  max-sm:py-2 flex items-center sm:justify-center border-none "
                onMouseEnter={() => setIsOpen(true)}
            >
                <div className='flex'>
                    <div className={`pr-3 ${isViewed ? 'font-bold' : ''}`} onClick={() => url ? window.location.assign(url) : null}>
                        {title}
                    </div>
                    <div className={`${isOpen && 'transform rotate-180'} flex justify-center ${url && 'hidden'}`}>
                        {<Image src={Arrow} alt="Logo" />}
                    </div>

                </div>

            </button>
            {isOpen && !url && (
                <div className="pb-2">
                    {children}
                </div>
            )}
        </div>
    );
};

const Accordion: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="sm:flex sm:w-full justify-between">{children}</div>;
};

const ChildrenAccordion: React.FC<{ title: string, url?: string, isChildDisabled?: boolean, menuChildren?: any }> = ({ title, url, isChildDisabled, menuChildren }) => {

    const dispatch = useDispatch();
    function handleMenu() {
        cleanMockStatusValues();
        dispatch(toggleMenu());
    }

    return (
        <div className={`relative ${menuChildren.onlyAdm && !teacherSaved.admin && 'hidden'} flex justify-center items-center`} >
            <span className='sm:text-center max-sm:pl-3 py-2 '>
                {isChildDisabled ?
                    <div className="absolute inset-0 bg-lightGray opacity-50 z-50 " ></div>
                    : null}
                <Link href={url || '/'} onClick={handleMenu} className={`${window.location.pathname == url?.toString() ? 'font-bold' : ''}`}>
                    {title}
                </Link>
            </span>
        </div>
    );
};

const AccordionGeneral: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="flex w-full border-2 border-darkBlueLight rounded p-3">{children}</div>;
};
const ChildrenGeneral: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};
const AccordionItemGeneral: React.FC<{ title: string, children?: any, }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="relative max-sm:pt-1 max-sm:border-t-2  max-sm:border-gray-300 w-full" >
            <button
                className="w-full text-left max-sm:py-2 flex items-center justify-center border-none "
                onClick={() => setIsOpen(!isOpen)}
                type='button'
            >
                <div className='flex w-full items-center'>
                    <div className={`hover:scale-105 pr-3 font-bold text-2xl text-darkBlue`}>
                        {title}
                    </div>
                    <div className={`${isOpen && 'transform rotate-180'}`}>
                        {<Image src={Arrow} alt="Logo" />}
                    </div>

                </div>

            </button>
            {isOpen && (
                <div className="pb-2 w-full justify-center">
                    {children}
                </div>
            )}
        </div>
    );
};

export { Accordion, AccordionItem, ChildrenAccordion, AccordionGeneral, ChildrenGeneral, AccordionItemGeneral };
