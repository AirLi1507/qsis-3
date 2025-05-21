"use client"

import { IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconChevronCompactLeft, IconDoorExit, IconFilePencil, IconHome, IconSettings } from "@tabler/icons-react"
import Tab from "./tab"
import Logo from "../brand/logo"
import { useTranslations } from "next-intl"

const Sidebar = ({ callback }: { callback: () => void }) => {
  const t = useTranslations("Dashboard")
  return (
    <>
      <nav className="min-w-fit bg-sky-50/25 dark:bg-black/10 shadow-xl flex flex-col overflow-scroll box-border duration-500 transform-gpu will-change-transform">
        <div className="flex flex-col">
          <Logo logoSize={36} className="mt-12 mb-8" variant="hover" />
          <span className="text-sky-700 dark:text-sky-500 text-3xl text-center font-bold select-none">QSIS 3</span>
        </div>
        <div className="min-h-fit mt-6 flex flex-col">
          <Tab href="/dashboard" icon={IconHome}>{t("home")}</Tab>
          <Tab href="/dashboard/profile" icon={IconAddressBook}>{t("profile")}</Tab>
          <Tab href="/dashboard/homework" icon={IconFilePencil}>{t("homework")}</Tab>
          <Tab href="/dashboard/ec" icon={IconBallBasketball}>{t("ec")}</Tab>
          <Tab href="/dashboard/reading" icon={IconBooks}>{t("reading")}</Tab>
          <Tab href="/dashboard/ss" icon={IconCheckbox}>{t("ss")}</Tab>
        </div>
        <div className="mt-auto mb-4">
          <Tab href="/logout" icon={IconDoorExit}>Logout</Tab>
          <Tab href="/dashboard/settings" icon={IconSettings}>Settings</Tab>
          <Tab href="" icon={IconAddressBook}>3A-XX MinecraftPlayer87</Tab>
        </div>
      </nav>
      <div className="flex justify-end">
        <span className="mr-2 h-8 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg flex absolute top-[50%] cursor-pointer" onClick={callback}>
          <IconChevronCompactLeft stroke={2} className="m-auto" />
        </span>
      </div>
    </>
  )
}

export default Sidebar
