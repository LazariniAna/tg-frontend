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
import { PersonOutline } from '@mui/icons-material';
import { useUser } from "@/contexts/UserContext";
import { Login } from '@mui/icons-material';

export default function Header() {
  const router = useRouter()
  const menu = useSelector((state: RootState) => state.menu)
  const [showMenu, setShowMenu] = useState(menu.visible)
  const dispatch = useDispatch();
  const { user, setUser } = useUser();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleMenu() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    setShowMenu(true)
  }, [menu])

  return (
    <div className="bg-primary rounded-bl-2xl rounded-br-2xl py-5 flex w-full fixed z-90">
      <div className="px-7 flex justify-between w-full ">
        <div className="w-full flex justify-between">
          <div className="cursor-pointer">
            <Image src={Menu} alt="Menu" onClick={handleMenu} />
          </div>
          <div className="flex justify-center w-9/12">
            <Link href={'/'} onClick={() => { cleanMockStatusValues() }} className=" flex items-center">
              <Image src={Logo} alt="Logo" width={125} />
              <i className="text-2xl max-sm:hidden text-zinc-50 no-underline "><b>Colégio</b>Sol</i>
            </Link>
          </div>

          {user ? (
            <div
              className="flex justify-center items-center text-white cursor-pointer gap-5 relative"
              onMouseEnter={() => setIsDropdownVisible(true)}
              // onMouseLeave={() => setIsDropdownVisible(false)}
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              <div className="flex justify-center items-center w-full">
                <PersonOutline fontSize="large" />
                <div className="max-sm:hidden">
                  Olá, {user.nome.split(' ')[0]}!
                </div>
              </div>
              {isDropdownVisible && (
                <div className="absolute top-full right-0  bg-black text-white rounded-md shadow-lg w-40 p-2">
                  <div className="flex hover:bg-gray-700 cursor-pointer gap-3" onClick={() => {
                    destroyCookie(null, "Bearer");
                    setUser(null)
                    localStorage.removeItem('user_soberano')
                    setTimeout(() => window.location.assign('/login'), 500)

                  }} >
                    <Image src={Out} alt="Logo usuário" />
                    Sair
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center text-white cursor-pointer">
              <Login onClick={() => window.location.assign('/login')} fontSize="medium" />
              Entrar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
