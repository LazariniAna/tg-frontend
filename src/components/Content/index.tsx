'use client'

import { RootState } from "@/redux"
import { getCookie } from "@/utils/helper"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Content({ children }: { children: React.ReactNode }) {
  const menu = useSelector((state: RootState) => state.menu)
  const [showMenu, setShowMenu] = useState(menu.visible)

  useEffect(() => {
    const bearerAuth = getCookie('Bearer');
    if (!bearerAuth){ setShowMenu(false)}else{
      setShowMenu(menu.visible)
    }
  }, [menu])
  return (
    <div className={`pt-24 mb-52 pb-52 w-full h-lvh flex flex-col items-center  `}>
      {children}
    </div>
  );
}