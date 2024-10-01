'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { verificarURL } from '@/utils/helper'
import { useDispatch } from 'react-redux'
import { changeVisible } from '@/redux/reducers/menuReducer'
 
export default function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const dispatch = useDispatch();

  useEffect(() => {
    const notshow = verificarURL(window.location.origin, `${window.location.origin}${window.location.pathname}`);
      if(!notshow){
        dispatch(changeVisible(true))
      }else{
        dispatch(changeVisible(false))
      }
  }, [pathname, searchParams])
 
  return null
}