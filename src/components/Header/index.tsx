'use client'
import Image from "next/image";
import LogoSm from '../../assets/logo-sm.svg';
import Menu from '../../assets/menu.svg';
import Logo from '../../assets/logo.svg';
import Out from '../../assets/out.svg';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleMenu } from "@/redux/reducers/menuReducer";
import { RootState } from "@/redux";
import { useRouter } from "next/navigation";
import { cleanMockStatusValues, cleanMockValues, getCookie } from "@/utils/helper";
import Link from "next/link";


export default function Header() {
  const router = useRouter()
  const menu = useSelector((state: RootState) => state.menu)
  const [showMenu, setShowMenu] = useState(menu.visible)
  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const bearerAuth = getCookie('Bearer');
    if (!bearerAuth) {
      setShowMenu(false)
    } else {
      setShowMenu(menu.visible)
    }
  }, [menu])

  return (
    <div className="bg-primary rounded-bl-2xl rounded-br-2xl py-5 flex w-full fixed z-90">
      <div className="px-7 flex justify-between w-full ">
        <div className="w-full flex justify-between">
            <div className="cursor-pointer">
              <Image src={Menu} alt="Logo" onClick={handleMenu} />
            </div> 
            <Link href={'/'} onClick={() => { cleanMockStatusValues() }} className="flex items-center text-2xl w-1/4 no-underline text-zinc-50">
            <Image src={Logo} alt="Logo" width={125} />
            <i className="max-sm:hidden text-zinc-50 no-underline"><b>Colégio</b>Sol</i>
          </Link>
            <div className="flex flex-col justify-center items-center text-white cursor-pointer" onClick={() => {
                router.back();
            }}>
              <Image src={Out} alt="Logo usuário" />
               Voltar
            </div>
        </div>
      </div>
    </div>
  );
}