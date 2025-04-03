import { Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconChevronCompactLeft, IconChevronCompactRight, IconDoorExit, IconFilePencil, IconHome, IconPhoto, IconProgressHelp, IconSettings, IconShield, IconUserCircle } from "@tabler/icons-react";
import Logo from "../Branding/logo.tsx";
import ContextMenu from "./ContextMenu/Wrapper.tsx";
import { UserContext } from "../Data/context.tsx";
import { Menus } from "./ContextMenu/Menu.ts";

type NavItemProps = {
  tab: String
  children: React.ReactNode
}

const NavItem = ({ tab, children }: NavItemProps) => {

  const currentTab = window.location.pathname.split('/')[2]
  const navigate = useNavigate()

  let isTab

  if (currentTab === tab || (tab === '' && location.pathname === '/dashboard')) { isTab = true }

  return (
    <a
      onClick={() => {
        if (tab !== "logout") {
          navigate(`/dashboard${tab !== '' ? '/' + tab : ''}`)
        } else {
          localStorage.removeItem('login')
          location.replace('/login')
        }
      }}
      className={`
        text-md
        ${isTab ? "text-zinc-50" : "dark:text-zinc-50"}
        w-[240px]
        md:w-[260px]
        ${isTab
          ?
          "bg-sky-700/60 dark:bg-[#60a3cb]"
          :
          "hover:bg-sky-700/15 dark:hover:bg-sky-700/25 active:bg-sky-700/30 dark:active:bg-sky-700/40"
        }
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

const Dashboard = () => {

  const data = useContext(UserContext)

  const [navVisibility, setNavVisibility] = useState(true)

  const tabsUpper = [
    { name: "Home", url: "", icon: IconHome },
    { name: `${data.role} Profile`, url: "profile", icon: IconAddressBook },
    { name: "Homework", url: "homework", icon: IconFilePencil },
    { name: "Extension Curriculum", url: "ec", icon: IconBallBasketball },
    { name: "Reading", url: "reading", icon: IconBooks },
    { name: "Subject Selection", url: "ss", icon: IconCheckbox },
  ]

  const tabsLower = [
    { name: "Settings", url: "settings", icon: IconSettings },
    { name: "Logout", url: "logout", icon: IconDoorExit },
    {
      name: `${data.class ? `${data.form}${data.class}-${data.classNo}` : null} ${data.fullname}`, url: "profile", icon: IconUserCircle
    },
  ]

  if (data?.role !== 'Student') {
    tabsUpper.push(
      { name: "Student Support", url: "support", icon: IconProgressHelp },
      { name: "Album", url: "album", icon: IconPhoto }
    )
    tabsLower.unshift(
      { name: "Administration", url: "admin", icon: IconShield }
    )
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    localStorage.setItem('userPreference', JSON.stringify({ theme: event.matches ? 1 : 0 }))
  });

  const localConfig = JSON.parse(localStorage.getItem('userPreference') as string)

  const theme = localConfig ? localConfig.theme : 0

  useEffect(() => {
    if (theme == 0) {
      document.getElementById('root')?.classList.remove('dark')
    } else {
      document.getElementById('root')?.classList.add('dark')
    }
  }, [])

  return (
    <>
      <ContextMenu.Wrapper className="contextMenuWrapper">
        {Menus()[0].map((item, i) => {
          return (
            <ContextMenu.Item
              className={`
                contextMenuItem
                ${item.bg
                  ?
                  item.bg
                  :
                  "hover:bg-sky-700/60 dark:hover:bg-sky-400/70"
                }
              `}
              func={item.func}
              key={i}
            >
              <span className="scale-95">{item.text}</span>
              <item.icon stroke={1.75} className="ml-auto scale-75" />
            </ContextMenu.Item>
          )
        })}
        <hr className="my-[4.5px] border-t-2 border-t-zinc-400/45 dark:border-t-zinc-700 rounded-lg" />
        {Menus()[1].map((item, i) => {
          return (
            <ContextMenu.Item
              className={`
                contextMenuItem
                ${item.bg
                  ?
                  item.bg
                  :
                  "hover:bg-sky-700/60 dark:hover:bg-sky-400/70"
                }
              `}
              func={item.func}
              key={i}
            >
              <span className="scale-95">{item.text}</span>
              <item.icon stroke={1.75} className="ml-auto scale-75" />
            </ContextMenu.Item>
          )
        })}
      </ContextMenu.Wrapper>
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
          <div className="xl:h-full flex flex-col pt-8 overflow-y-scroll">
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
            <div className={`${navVisibility ? "w-full h-full absolute top-0 left-0 z-10 sm:hidden" : "hidden"}`} onClick={() => { setNavVisibility(false) }} />
            <div className={`w-full h-full ${navVisibility ? "pointer-events-none sm:pointer-events-auto select-none" : ""}`}>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
