"use client"

import { IconChevronCompactLeft, IconChevronCompactRight } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import "./sidebarToggle.css"

function sidebarToggle() {
  document.querySelector("nav")?.classList.toggle("-ml-100")
}

const SidebarToggle = () => {
  return (
    <span className="mr-2 h-8 hover:bg-black/5 rounded-lg flex absolute top-[50%] cursor-pointer" id="toggle" onClick={() => { sidebarToggle() }}>
      <IconChevronCompactLeft stroke={2} className="m-auto" />
    </span>
  )
}

const DashboardSidebarToggle = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    document.getElementById("toggle")!.onclick = (() => { setVisible(!visible) })
  }, [])
  return (
    <span className={`my-auto ml-1.5 h-8 hover:bg-black/5 rounded-lg flex duration-500 absolute top-[50%] cursor-pointer ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => { sidebarToggle(); setVisible(!visible) }}>
      <IconChevronCompactRight stroke={2} className="m-auto" />
    </span>

  )
}


export { SidebarToggle, DashboardSidebarToggle }
