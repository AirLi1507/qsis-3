import { Metadata } from "next"
import "../global.css"
import Tab from "@/components/dashboard/tab"
import { IconDoorExit } from "@tabler/icons-react"
import Logo from "@/components/brand/logo"
import { DashboardSidebarToggle, SidebarToggle } from "@/components/dashboard/sidebarToggle"

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
    <div className="w-full h-full bg-white/45 rounded-2xl inset-shadow-[0_0_4px_rgba(0,0,0,.5)] backdrop-blur-xl flex">
      <nav className="w-100 bg-sky-50/25 shadow-xl flex flex-col duration-500">
        <div className="flex flex-col">
          <Logo logoSize={40} className="mt-14 mb-8" variant="hover" />
          <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
        </div>
        <div className="flex justify-end">
          <SidebarToggle />
        </div>
        <div className="mt-auto mb-4">
          <Tab href={"/logout"} icon={IconDoorExit}>Logout</Tab>
        </div>
      </nav>
      <div className="w-full flex">
        <DashboardSidebarToggle />
        {children}
      </div>
    </div>
  )
}

export default Layout
