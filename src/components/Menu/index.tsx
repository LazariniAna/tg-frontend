'use client'
import Image from "next/image";
import House from '../../assets/houseLine.svg';
import { Accordion, AccordionItem, ChildrenAccordion } from "../Accordion";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { MenuItem } from "@/utils/types";
import Close from '../../assets/close.svg'
import { toggleMenu } from "@/redux/reducers/menuReducer";
import { useRouter } from "next/navigation";
import { teacherSaved } from "@/utils/const";

declare global {
    interface Window { }
}
export default function Menu({ fixed, showMenu }: { fixed?: boolean, showMenu?: boolean }) {
    const menu = useSelector((state: RootState) => state.menu);
    const dispatch = useDispatch();
    const router = useRouter()

    function handleMenu() {
        dispatch(toggleMenu());
    }

    const visibleAdm = useMemo(() => {
        return menu.onlyAdm && teacherSaved.admin
    }, [])



    return (
        <div className={`${menu.open ? '' : 'hidden'} ${visibleAdm && 'hidden'} bg-[rgba(100,150,161,0.4)] backdrop-blur overflow-y-auto z-70 max-sm:pt-24 pt-28  max-sm:h-[150vh] max-mxs:w-11/12 max-sm:w-11/12 w-full flex flex-col items-center text-black   ${fixed ? 'fixed' : ''} ${menu?.open ? 'max-sm:block max-sm:fixed' : 'max-sm:hidden '}`} style={{ borderRight: '4px solid #E3E4E5' }}>
            <div className="sm:hidden pb-4 sm:pt-5 w-full flex justify-end items-end"><Image src={Close} alt='Fechar' className="mr-5 cursor-pointer" onClick={handleMenu} /></div>
            <div className="w-11/12 h-full flex flex-col justify-between">
                <div className="w-full sm:flex">
                    <Accordion>
                        {menu?.itensMenu?.length && menu?.itensMenu.map((item: MenuItem) => (
                            <AccordionItem key={item.title} itemMenu={item} title={item.title} icon={item.icon} url={item?.url}>
                                {item.childrens?.length && item.childrens.map(child => (
                                    <ChildrenAccordion key={child.title} title={child.title} url={child?.url} menuChildren={child} />
                                ))
                                }
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}