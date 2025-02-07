import { Box, Button, Card, Flex, TabNav, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Logo from "../Branding/logo";
import { Path, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bg from "../AuthWrapper/formWrapper"
import { IconAddressBook, IconDoorExit, IconFilePencil, IconHome } from "@tabler/icons-react";

type NavItemProps = {
  tab: String
  children: React.ReactNode
}

const NavItem = ({tab, children}: NavItemProps) => {
  
  // const [tabSelected, tabSelect] = useState("")
  const currentTab = window.location.pathname.split('/')[2]
  const navRef = useRef<HTMLAnchorElement>(null)
  const navigate = useNavigate()

  let isTab

  if (currentTab === tab) {isTab = true}

  // function stateCSS() {
  //   if (currentTab === tab) {
  //     navRef.current?.classList.add("bg-blue-200")
  //     navRef.current?.classList.remove("hover:bg-blue-200/50")
  //   } else {
  //     navRef.current?.classList.remove("bg-blue-200")
  //     navRef.current?.classList.add("hover:bg-blue-200/50")
  //   }
  // }

  return (
    <>
      <a
        onClick={()=>{
          if (tab !== "logout") {
            navigate(`/dashboard/${tab}`)
          } else {navigate('/login')}
          
          // document.querySelectorAll('a').forEach((e)=>{e.classList.remove("bg-blue-200")})
          // tabSelect(tabSelected ? false : true)
          // tabSelect(true)
        }}
        className={`
          w-[260px]
          mt-[1px]
          ${isTab ? "bg-blue-200" : "hover:bg-blue-200/50"}
          rounded-full
          py-3
          px-3
          flex
          items-center
          duration-150
          cursor-pointer
          select-none
        `}
        ref={navRef}
      >
        <span className="flex flex-row gap-1 justify-start items-center">{children}</span>
      </a>
    </>
  )
}

const Dashboard = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Theme accentColor="blue">
        {/* <Flex direction={"row"}>
          <nav className={`
            w-[300px]
            h-svh
            bg-sky-50
            border-r-1
            border-r-zinc-200
          `}>
            <div className="pt-16 flex flex-col items-center">
              <Logo logoSize={36}/>
                <span className="text-blue-800 text-4xl font-bold mt-6 mb-8">QSIS 3</span>
              <div className="flex flex-col h-svh">
                <NavItem tab="home">Home</NavItem>
                <NavItem tab="profile">Student Profile</NavItem>
              </div>
              <NavItem tab="logout">Logout</NavItem>
            </div>
          </nav>
          <main className="">
            {children}
          </main>
        </Flex> */}

        <div className="w-svw h-screen flex">
          <nav className="
            w-[300px]
            bg-sky-50
            border-r-1
            border-r-zinc-200
            flex
            flex-col
            items-center
            py-4
            overflow-scroll
          ">
            <div className="my-8 flex flex-col gap-8">
              <Logo logoSize={36} />
              <span className="text-blue-800 text-4xl font-bold">QSIS 3</span>
            </div>
            <div className="h-full">
              <NavItem tab="home">
                <IconHome stroke={1.5}/>
                Home
              </NavItem>
              <NavItem tab="profile">
                <IconAddressBook stroke={1.5} />
                Student Profile
              </NavItem>
              <NavItem tab="homework">
                <IconFilePencil stroke={1.5} />
                Homework
              </NavItem>
            </div>
            <NavItem tab="logout">
              <IconDoorExit stroke={1.5} />
              Logout
            </NavItem>
          </nav>
          <main>
            {children}
          </main>
        </div>
      </Theme>
    </>
  )
}

export default Dashboard
