"use client"

import { ReactNode, useEffect, useRef } from "react"
import Main from "./main"
import Sidebar from "./sidebar"
import refresh from "@/utils/refresh"

const Wrapper = ({ children }: { children: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  let state: boolean = true
  const collapseHandle = () => {
    const sidebar = document.querySelector("nav")
    const main = document.querySelector("main")
    const innerBtn = document.getElementById("innerToggle")
    if (!(sidebar && innerBtn && main)) {
      return
    }
    if (state) {
      wrapperRef.current!.classList.add("-translate-x-71")
      innerBtn.classList.remove("opacity-0", "pointer-events-none")
      sidebar.classList.add("opacity-0")
      state = false
      return
    } else if (!state) {
      wrapperRef.current!.classList.remove("-translate-x-71")
      innerBtn.classList.add("opacity-0", "pointer-events-none")
      sidebar.classList.remove("opacity-0")
      state = true
      return
    }
  }
  useEffect(() => {
    refresh()
  })
  return (
    <div className="w-full flex duration-500 transform-gpu will-change-transform pointer-events-auto" ref={wrapperRef}>
      <Sidebar callback={collapseHandle} />
      <Main callback={collapseHandle}>
        {children}
      </Main>
    </div>
  )
}

export default Wrapper
