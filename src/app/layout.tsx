import axios from 'axios';
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/redux/reduxProvider";
import api from "@/server/api";

declare global {
  interface Window {
    dataLayer: any;
  }
  interface Document {
    title: string;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <head>
        <title>Colégio Soberano</title>
        <meta charSet='utf-8' />
      </head>
      <body className={inter.className}>
        <main>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </main>
      </body>
    </html >
  )
}
