"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import Main from "./main"
import Sidebar from "./sidebar"
import refresh from "@/utils/refresh"
import { theme } from "@/utils/ui"

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [deviceWidth, setDeviceWidth] = useState<number>()
  const [sidebarState, setSidebar] = useState(true)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const collapseHandle = () => {
    const sidebar = document.querySelector("nav")
    const main = document.querySelector("main")
    const innerBtn = document.getElementById("innerToggle")
    if (!(sidebar && innerBtn && main && wrapperRef.current)) {
      return
    }
    if (sidebarState) {
      wrapperRef.current.classList.add("-translate-x-71")
      innerBtn.classList.remove("opacity-0", "pointer-events-none")
      sidebar.classList.add("opacity-0")
      setSidebar(false)
      return
    } else if (!sidebarState) {
      wrapperRef.current.classList.remove("-translate-x-71")
      innerBtn.classList.add("opacity-0", "pointer-events-none")
      sidebar.classList.remove("opacity-0")
      setSidebar(true)
      return
    }
  }
  useEffect(() => {
    refresh()
    theme()
    setDeviceWidth(window.outerWidth)
  }, [])
  return (
    <div className="flex duration-500 transform-gpu will-change-transform pointer-events-auto" style={{ width: deviceWidth && deviceWidth >= 800 ? sidebarState ? "calc(100% - 17.75rem)" : "100%" : "100%" }} ref={wrapperRef}>
      <Sidebar callback={collapseHandle} />
      <Main callback={collapseHandle}>
        {children}
      </Main>
    </div>
  )
}

export default Wrapper
