import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconChevronCompactLeft, IconChevronCompactRight, IconDoorExit, IconFilePencil, IconHome, IconPhoto, IconProgressHelp, IconSettings, IconShield, IconUserCircle } from "@tabler/icons-react";
import Logo from "../Branding/logo.tsx";
import UserData from "../Data/types.ts";
// import CnMenuWrapper from "./ContextMenu/Wrapper.tsx";

type DashboardProps = {
  userInfo?: UserData
  children: React.ReactNode
}

type NavItemProps = {
  tab: String
  children: React.ReactNode
}

const NavItem = ({ tab, children }: NavItemProps) => {

  const currentTab = window.location.pathname.split('/')[2]
  const navigate = useNavigate()

  let isTab

  if (currentTab === tab) { isTab = true }

  return (
    <a
      onClick={() => {
        if (tab !== "logout") {
          navigate(`/dashboard/${tab}`)
        } else { navigate('/login') }
      }}
      className={`
        text-md
        ${isTab ? "text-zinc-50" : "dark:text-zinc-50"}
        w-[240px]
        md:w-[260px]
        ${isTab ? "bg-sky-700/60 dark:bg-[#60a3cb]" : "hover:bg-sky-700/15 dark:hover:bg-sky-700/25 active:bg-sky-700/30 dark:active:bg-sky-700/40"}
        rounded-full
        py-3
        px-3
        flex
        items-center
        duration-150
        cursor-pointer
        select-none
      `}>
      <span className="
        flex
        flex-row
        gap-2
        justify-start
        items-center
        ">
        {children}
      </span>
    </a>
  )
}

const Dashboard = ({ userInfo, children }: DashboardProps) => {

  const [navVisibility, setNavVisibility] = useState(true)

  const tabsUpper = [
    { name: "Home", url: "home", icon: IconHome },
    { name: `${userInfo?.role} Profile`, url: "profile", icon: IconAddressBook },
    { name: "Homework", url: "homework", icon: IconFilePencil },
    { name: "Extension Curriculum", url: "ec", icon: IconBallBasketball },
    { name: "Reading", url: "reading", icon: IconBooks },
    { name: "Subject Selection", url: "ss", icon: IconCheckbox },
  ]

  const tabsLower = [
    { name: "Settings", url: "settings", icon: IconSettings },
    { name: "Logout", url: "logout", icon: IconDoorExit },
    {
      name: `${userInfo?.class ? `${userInfo?.form}${userInfo?.class}-${userInfo?.classNo}` : ``
        } ${userInfo?.fullname}`, url: "profile", icon: IconUserCircle
    },
  ]

  if (userInfo?.role !== 'Student') {
    tabsUpper.push(
      { name: "Student Support", url: "support", icon: IconProgressHelp },
      { name: "Album", url: "album", icon: IconPhoto }
    )
    tabsLower.unshift(
      { name: "Administration", url: "admin", icon: IconShield }
    )
  }

  const localConfig = JSON.parse(localStorage.getItem('userPreference') as string)

  const theme = localConfig ? localConfig[0].theme : 0

  useEffect(()=>{
    if (theme == 0) {
      document.getElementById('root')?.classList.remove('dark')
    } else {
      document.getElementById('root')?.classList.add('dark')
    }
  },[])

  return (
    // <CnMenuWrapper>
      <div className="dark:text-white w-svw h-svh flex">
        <nav className={`
          bg-sky-50
          dark:bg-slate-950/97.5 
          border-r-1
          border-r-zinc-200
          dark:border-r-zinc-800
          ${navVisibility ? "flex" : "hidden"}
          flex-row
          pl-2
          duration-200
        `}>
          <div className="h-fit xl:h-full flex flex-col pt-8 overflow-scroll">
            <div className="mt-2 md:mt-6 mb-4 border-b-sky-700 flex flex-col gap-8 items-center pb-4">
              <Logo logoSize={36} />
              <span className="text-blue-800 dark:text-blue-500 text-4xl font-bold select-none duration-200">QSIS 3</span>
            </div>
            <div className="flex flex-col duration-150">
              {tabsUpper.map((item, i) => {
                return (
                  <NavItem tab={item.url} key={i}>
                    {<item.icon stroke={1.5} key={i} />}
                    {item.name}
                  </NavItem>
                )
              })}
            </div>
            <hr className="my-3 2xl:mt-auto border-[1.5px] rounded-full border-sky-700/60 dark:border-[#60a3cb]" />
            <div className="pb-3">
              {tabsLower.map((item, i) => {
                return (
                  <NavItem tab={item.url} key={i}>
                    {<item.icon stroke={1.5} key={i} />}
                    {item.name}
                  </NavItem>
                )
              })}
            </div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <span className="
              dark:text-white
              hover:bg-zinc-400/25
              rounded-sm
              py-1
              mr-1
              duration-100
              cursor-pointer
            " onClick={() => {
                setNavVisibility(false)
              }}>
              <IconChevronCompactLeft stroke={1.5} />
            </span>
          </div>
        </nav>
        <main className="w-full h-full bg-blue-50 dark:bg-slate-950 p-3 md:p-5 duration-200">
          <span className={`
            h-full
            ${navVisibility ? "hidden" : "flex"}
            flex-col
            justify-center
            absolute
            top-0
            -left-[1.5px]
            md:left-[3px]`}>
            <span className="
              hover:bg-zinc-400/25
              rounded-md
              duration-100
              cursor-pointer
            " onClick={() => { setNavVisibility(true) }}>
              <IconChevronCompactRight stroke={1.5} className="-mx-[5px] my-0.5" />
            </span>
          </span>
          <div className={`
            w-full
            h-full
            border-2
            border-sky-700/60
            dark:border-[#60a3cb]
            rounded-lg
            shadow-[inset_0_0_6px_rgba(0,0,0,.25)]
            ${navVisibility ? "blur-xl sm:blur-none" : ""}
            overflow-x-hidden
            overflow-y-scroll
            box-border
            p-3
          `}>
            <div className={`${navVisibility?"w-full h-full absolute top-0 left-0 z-10 sm:hidden":"hidden"}`} onClick={()=>{setNavVisibility(false)}}/>
            <div className={`w-full h-full ${navVisibility?"pointer-events-none sm:pointer-events-auto select-none":""}`}>
              {children}
            </div>
          </div>
        </main>
      </div>
    // </CnMenuWrapper>
  )
}

export default Dashboard
