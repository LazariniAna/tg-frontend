'use client'
import { ToastContainer } from "react-toastify";
import Header from "../Header";
import Menu from "../Menu";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import 'react-loading-skeleton/dist/skeleton.css';
import { WhatsApp } from '@mui/icons-material';
import MenuBottom from "../Menu/MenuBottom";

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
    <MenuBottom />
    {/* <a
      href="https://wa.me/5551999999999" // Substitua pelo número de telefone desejado
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      title="Fale conosco no WhatsApp"
    >
      <WhatsApp fontSize="large" />
    </a> */}
  </div >;
}
