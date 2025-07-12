import { IconChevronCompactRight } from "@tabler/icons-react"
import { Outlet } from "react-router"
import Sidebar from "./sidebar.tsx"
import { UserProvider } from "../../utils/context.tsx"

export function collapse() {
  const dashboard = document.getElementById("dashboard")
  const innerToggle = document.getElementById("innerToggle")
  const sidebar = document.querySelector("nav")
  if (!dashboard || !sidebar || !innerToggle) {
    return
  }
  sidebar.classList.toggle("opacity-0")
  dashboard.classList.toggle("-translate-x-68")
  dashboard.classList.toggle("min-w-[calc(100%+17rem)]")
  dashboard.classList.toggle("min-w-[calc(100%)]")
  innerToggle.classList.toggle("opacity-0")
  innerToggle.classList.toggle("pointer-events-none")
  return
}

const Layout = () => {
  return (
    <UserProvider>
      <div className="w-full h-full bg-white/45 dark:bg-zinc-950/75 backdrop-blur-xl inset-shadow-[0_0_4px_rgba(0,0,0,.5)] duration-150">
        <div id="dashboard" className="min-w-[calc(100%)] h-full flex duration-500">
          <Sidebar />
          <span className="h-8 hover:bg-black/5 rounded-lg flex items-center absolute left-71 top-[50%] -translate-y-[50%] opacity-0 duration-100 cursor-pointer pointer-events-none" id="innerToggle" onClick={collapse}>
            <IconChevronCompactRight />
          </span>
          <main className="w-full h-full p-4 overflow-y-scroll overflow-x-hidden box-border">
            <Outlet />
          </main>
        </div>
      </div>
    </UserProvider>
  )
}

export default Layout
