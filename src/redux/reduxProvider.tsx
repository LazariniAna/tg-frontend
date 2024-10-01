'use client'
import { Provider } from "react-redux";
import store from "./index";
import Template from "@/components/Template";
import ScrollbarStyles from "@/components/Scroll/ScrollBarStyle";
import NavigationEvents from "@/components/Router/NavigationEvents";
import { Suspense } from "react";
import ApplicationSkeleton from "@/components/Skeleton/Application";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return <Provider store={store}>
    <Suspense fallback={<ApplicationSkeleton />}>
      <NavigationEvents />
      <ScrollbarStyles />
      <Template>
        {children}
      </Template>
    </Suspense>
  </Provider>;
}