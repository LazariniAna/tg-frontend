'use client'
import { ToastContainer } from "react-toastify";
import Header from "../Header";
import Menu from "../Menu";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import 'react-loading-skeleton/dist/skeleton.css';
import { getCookie } from "@/utils/helper";

export default function Template({ children }: { children: React.ReactNode }) {
  const menu = useSelector((state: RootState) => state.menu)
  return <div className="h-full">
    <Header />
    <div className={`flex`}>
      <Menu fixed showMenu={menu.open} />
      {menu.open && (
        <div className="fixed inset-0 bg-black opacity-50 z-50 sm:hidden" ></div>
      )}
      {children}
    </div>
    <ToastContainer />
  </div >;
}
