import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { getCookie } from "@/utils/helper";

export default function ContentFixedButton({ children, cols }: { children: React.ReactNode, cols?: true }) {
  const menu = useSelector((state: RootState) => state.menu)
  const [showMenu, setShowMenu] = useState(menu.visible)

  useEffect(() => {
    const bearerAuth = getCookie('Bearer');
    if (!bearerAuth){ setShowMenu(false)}else{
      setShowMenu(menu.visible)
    }
  }, [menu])

  return (
    <div className={`z-20 flex w-full py-4 fixed bottom-0 left-0 bg-white ${showMenu ? 'justify-end max-sm:justify-center' : 'justify-center'}`} >
      <div className={`flex w-full items-center justify-center ${cols ? ' flex-col' : ''}`}>
        {children}
      </div>
    </div>
  );
}
