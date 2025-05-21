import { Metadata } from "next"
import "../global.css"
import Wrapper from "@/components/dashboard/wrapper"

export const metadata: Metadata = {
  title: "QSIS 3 | Dashboard",
  description: "Third generation of the QOS Student Information System.",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.svg"
  }
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:text-white w-full h-full bg-white/45 dark:bg-zinc-950/75 rounded-2xl inset-shadow-[0_0_4px_rgba(0,0,0,.5)] backdrop-blur-xl flex overflow-scroll box-border duration-150 pointer-events-none">
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  )
}

export default Layout
