'use client'
import Content from "@/components/Content"
import Image from 'next/image';
import ImageStudents from "../../assets/ImageStudents.png"
import { destroyCookie, setCookie } from 'nookies';
import { useLayoutEffect } from "react";
import { getCookie } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";


export default function Login() {
  const router = useRouter();

  useLayoutEffect(() => {
    document.title = "Login sala do professor | Sala do professor"
    const bearerAuth = getCookie('Bearer');
    if (bearerAuth) router.push('/')
  }, [])

  return (
    <Content>
      <div className="flex flex-col items-center w-full justify-center ">
        <div className='w-11/12 flex justify-center items-center flex-col'>
          <Button color="black" fill="filled">
            LOGIN
          </Button>
        </div>
      </div>
    </Content>
  )
}