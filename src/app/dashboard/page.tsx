"use client"

import { Icon, IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconFilePencil } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

interface QuickNavProp {
  url: string
  title?: string
  description?: string
  icon: Icon
}

const QuickNav = (prop: QuickNavProp) => {
  return (
    <Link href={prop.url}>
      <div className="text-black/25 hover:text-black/75 dark:text-white/25 dark:hover:text-white/75 h-64 md:h-44 bg-white/20 hover:bg-white/50 dark:bg-black/25 dark:hover:bg-black/45 rounded-xl dark:border-2 hover:border-black/75 dark:border-white/25 dark:hover:border-white/75 shadow-lg p-4 pt-6 box-border duration-250">
        <div className="h-full flex flex-col md:flex-row gap-2 overflow-hidden box-border">
          <prop.icon className="min-w-16 min-h-16 -translate-x-2 md:-translate-x-0" />
          <div className="h-full flex flex-col pr-2">
            <span className="text-xl md:text-3xl font-semibold">{prop.title}</span>
            <span className="text-lg">
              {prop.description}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Dashboard = () => {
  const t = useTranslations("Dashboard")
  return (
    <div className="w-full h-full m-2 flex flex-col">
      <span className="text-2xl font-medium w-full bg-white/45 dark:bg-white/20 rounded-lg shadow-[0_0_4px_rgba(0,0,0,.25)] p-6 duration-750 select-none">{t("quick_nav")}</span>
      <div className="w-full h-fit mt-4 grid grid-cols-2 gap-4 p-2 pb-6 overflow-y-scroll">
        <QuickNav url="/dashboard/profile" icon={IconAddressBook} title={t("profile")} description={t("profile_desc")} />
        <QuickNav url="/dashboard/homework" icon={IconFilePencil} title={t("homework")} description={t("homework_desc")} />
        <QuickNav url="/dashboard/ec" icon={IconBallBasketball} title={t("ec")} description={t("ec_desc")} />
        <QuickNav url="/dashboard/reading" icon={IconBooks} title={t("reading")} description={t("reading_desc")} />
        <QuickNav url="/dashboard/ss" icon={IconCheckbox} title={t("ss")} description={t("ss_desc")} />
      </div>
    </div>
  )
}

export default Dashboard

