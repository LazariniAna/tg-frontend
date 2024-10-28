'use client'
import Image from "next/image";
import Coc from '../../assets/coc_pearson.png';
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
import { destroyCookie } from "nookies";


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
            <Image src={Menu} alt="Menu" onClick={handleMenu} />
          </div>
          <div className="flex justify-center w-4/5">
            <Link href={'/'} onClick={() => { cleanMockStatusValues() }} className=" flex items-center">
              <Image src={Logo} alt="Logo" width={125} />
              <i className="text-2xl max-sm:hidden text-zinc-50 no-underline "><b>Colégio</b>Sol</i>
            </Link>
            {/* <Link href={'/'} onClick={() => { cleanMockStatusValues() }} className="flex items-center">
              <Image src={Coc} alt="Coc" width={100} />
            </Link> */}
          </div>

          <div className="flex flex-col justify-center items-center text-white cursor-pointer" onClick={() => {
            router.back();
          }}>
            <Image src={Out} alt="Logo usuário" onClick={() => {
              destroyCookie(null, "Bearer");
              setTimeout(() => window.location.assign('/login'), 500)

            }} />
            Sair
          </div>
        </div>
      </div>
    </div >
  );
}