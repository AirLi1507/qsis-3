import { Metadata } from "next"
import "../global.css"
import Tab from "@/components/dashboard/tab"
import { IconDoorExit } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "QSIS 3 - Dashboard",
  description: "Third generation of the QOS Student Information System.",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.svg"
  }
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-svw h-svh flex">
      <nav className="w-80 border-r-[1px] border-r-zinc-200/75 shadow-sm">
        <Tab href={"/logout"} icon={IconDoorExit}>lgout</Tab>
      </nav>
      <div className="w-full flex">
        {children}
      </div>
    </div>
  )
}

export default Layout
