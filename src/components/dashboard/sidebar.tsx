import { IconAddressBook, IconBallBasketball, IconBooks, IconChalkboard, IconCheckbox, IconChevronCompactLeft, IconDoorExit, IconFilePencil, IconHome, IconSettings, IconUser, type Icon } from "@tabler/icons-react"
import { Link, useLocation } from "react-router"
import { useContext, useEffect, useState } from "react"
import { collapse } from "./layout"
import Logo from "../branding/logo"
import { useTranslation } from "react-i18next"
import { UserContext } from "../../utils/context"

interface TabProp {
  icon: Icon
  name: string
  href: string
}

const Tab = (prop: TabProp) => {
  const location = useLocation().pathname.split("/").pop()
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (
      /* Checking if current path matches the hypertext reference */
      (prop.href === location)
      ||
      /* Checking for Home tab that its hypertext reference is blank */
      /* To be honest I'm trying to add comments so that people understand my code easier but I'm too lazy to do all of them haha */
      (prop.href === "" && location === "dashboard")
    ) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [location])
  return (
    <Link to={prop.href} className={`w-60 ${active ? "text-white bg-sky-600/50 dark:bg-sky-400/75" : "hover:bg-sky-600/15"} rounded-full flex gap-2 items-center p-3 duration-150 select-none`}>
      <prop.icon stroke={1.5} />
      <span>{prop.name}</span>
    </Link>
  )
}

const Sidebar = () => {
  const { t } = useTranslation()
  const { chi_name, eng_name, form, className, classNo } = useContext(UserContext)
  return (
    <nav className="min-w-fit bg-blue-50/25 dark:bg-black/10 shadow-lg shadow-black/15 flex flex-col p-4 overflow-y-scroll box-border duration-500">
      <div className="mx-auto my-8">
        <Logo size={72} />
      </div>
      <span className="text-sky-700 dark:text-sky-500 text-3xl font-bold mx-auto mb-6 select-none">
        OpenSIS
      </span>
      <div className="flex flex-col mb-auto">
        <Tab icon={IconHome} name={t("tab_name.home")} href="" />
        <Tab icon={IconAddressBook} name={t("tab_name.profile")} href="profile" />
        <Tab icon={IconFilePencil} name={t("tab_name.homework")} href="homework" />
        <Tab icon={IconBallBasketball} name={t("tab_name.ec")} href="ec" />
        <Tab icon={IconBooks} name={t("tab_name.reading")} href="reading" />
        <Tab icon={IconCheckbox} name={t("tab_name.ss")} href="ss" />
        <Tab icon={IconChalkboard} name={t("tab_name.ilearn")} href="ilearn" />
      </div>
      <Tab icon={IconDoorExit} name={t("tab_name.logout")} href="/auth/logout" />
      <Tab icon={IconSettings} name={t("tab_name.settings")} href="settings" />
      <Tab icon={IconUser} name={`${form}${className}-${classNo} ${chi_name} ${eng_name}`} href="#" />
      <span className="h-8 hover:bg-black/5 rounded-lg flex items-center absolute left-58.5 top-[50%] -translate-y-[50%] duration-100 cursor-pointer" onClick={collapse}>
        <IconChevronCompactLeft />
      </span>
    </nav>
  )
}

export default Sidebar
