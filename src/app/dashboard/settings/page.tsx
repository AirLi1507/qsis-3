"use client"

import { Icon, IconCaretDownFilled, IconLanguage, IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import { useContext, useEffect, useState } from "react"
import { lang, theme } from "@/utils/ui"
import Cookies from "universal-cookie"
import Router from "next/router"
import { useRouter } from "next/navigation"

interface OptionCardProp {
  icon: Icon
  title: string
  description: string
  name: string
  value?: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  children: React.ReactNode
}

const OptionCard = (prop: OptionCardProp) => {
  return (
    <div className="w-full bg-white/25 dark:bg-white/10 rounded-md shadow-[0_0_4px_rgba(0,0,0,.25)] flex items-center p-6 duration-150 select-none">
      <prop.icon size={40} />
      <div className="h-full ml-4 mr-auto flex flex-col">
        <span className="text-xl duration-150">{prop.title}</span>
        <span className="text-md duration-150">{prop.description}</span>
      </div>
      <div className="bg-white/45 dark:bg-white/15 rounded-sm shadow-[0_0_2px_rgba(0,0,0,.25)] flex gap-1 items-center p-2" onClick={() => { document.getElementById(prop.name)!.click() }}>
        <select className="flex appearance-none outline-none" id={prop.name} name={prop.name} onChange={prop.onChange}>
          {prop.children}
        </select>
        <IconCaretDownFilled size={16} className="text-black/75 dark:text-white/75" />
      </div>
    </div>
  )
}

const Settings = () => {
  const [currentTheme, setTheme] = useState("light")
  const cookies = new Cookies
  const router = useRouter()
  useEffect(() => {
    setTheme(theme())
    const storedLang = cookies.get("lang")
    if (storedLang != undefined) {
      (document.getElementById("language") as HTMLSelectElement).value = storedLang
    }
  }, [])
  return (
    <div className="w-full m-2 bg-white/25 dark:bg-black/20 rounded-lg shadow-[0_0_4px_rgba(0,0,0,.25)] flex flex-col duration-150 overflow-hidden">
      <div className="text-2xl font-medium w-full bg-white/25 dark:bg-white/20 shadow-md p-6 duration-150 select-none">Settings</div>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4 overflow-scroll box-border">
        <OptionCard
          title="Color Preference"
          description="Switching to Light/Dark theme for QSIS 3."
          name="theme"
          icon={currentTheme === "dark" ? IconMoonFilled : IconSunFilled}
          onChange={(e) => { theme(e.currentTarget.value, () => setTheme(e.currentTarget.value)) }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </OptionCard>
        <OptionCard
          title="Language"
          description="Switching between languages in QSIS 3."
          name="language"
          icon={IconLanguage}
          onChange={(e) => { lang(e.currentTarget.value); router.refresh() }}
        >
          <option value="en-US">English</option>
          <option value="zh-HK">正體中文</option>
        </OptionCard>
      </div>
    </div>
  )
}

export default Settings
