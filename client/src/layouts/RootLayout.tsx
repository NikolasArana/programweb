import { Outlet, ScrollRestoration } from "react-router"
import { MainFooter } from "./MainFooter"
import { MainHeader } from "./MainHeader"


export const RootLayout = () => {
  return (
    <>
          <MainHeader />
          <main>
          <Outlet />
          </main>
          <MainFooter />
          <ScrollRestoration />
    </>
  )
}
