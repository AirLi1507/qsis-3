"use client"

import Topbar from "@/components/dashboard/topbar"
import { getRole } from "@/utils/role"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import "./page.css"
import Student from "./student"
import Teacher from "./teacher"

const Homework = () => {
  const t = useTranslations("Dashboard")
  const [role, setRole] = useState<number>()

  useEffect(() => {
    getRole(setRole)
  })
  if (role == undefined) {
    return (
      <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
        <Topbar title={t("homework")} />
      </div>
    )

  }
  if (role == 0) {
    return (
      <Student />
    )
  } else if (role > 0) {
    return (
      <Teacher />
    )
  } else {
    return (
      <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
        <Topbar title={t("homework")} />
      </div>
    )
  }
}

export default Homework
