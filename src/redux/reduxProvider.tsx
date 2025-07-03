'use client'
import { Provider } from "react-redux";
import store from "./index";
import Template from "@/components/Template";
import ScrollbarStyles from "@/components/Scroll/ScrollBarStyle";
import NavigationEvents from "@/components/Router/NavigationEvents";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import ApplicationSkeleton from "@/components/Skeleton/Application";
import { getCookie } from "@/utils/helper";
import AppProviders from "@/contexts/AppProviders";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bearerAuth, setBearerAuth] = useState<string | null>(null)

  useLayoutEffect(() => {
    setBearerAuth(getCookie('Bearer'))
  }, [])

  return <Provider store={store}>
    {/* <Suspense fallback={<ApplicationSkeleton />}> */}
    <AppProviders>
      <NavigationEvents />
      <ScrollbarStyles />
      {/* {bearerAuth
          ?
          <Template>
            {children}
          </Template>
          :
          <div>
            {children}
          </div>
        } */}
      <Template>
        {children}
      </Template>
    </AppProviders>

    {/* </Suspense> */}
  </Provider>;
}