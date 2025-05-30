"use client"

import Topbar from "@/components/dashboard/topbar"
import { getRole } from "@/utils/role"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const Homework = () => {
  const t = useTranslations("Dashboard")
  const [role, setRole] = useState<number>()
  useEffect(() => {
    getRole(setRole)
  }, [])
  if (role == undefined) {
    return <></>
  }
  if (role == 0) {
    return (
      <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
        <Topbar title={t("homework")} />
        <div className="w-full h-full flex flex-col">
          <table className="bg-white/25 dark:bg-black/20 shadow-[0_0_4px_rgba(0,0,0,.25)]">
            <tbody>
              <tr>
                <th className="border-b-2 border-b-red-100 p-2">name</th>
                <th className="border-b-2 border-b-red-100 p-2">name</th>
                <th className="border-b-2 border-b-red-100 p-2">name</th>
              </tr>
              <tr>
                <td>hi</td>
                <td>hi</td>
                <td>hi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  } else if (role > 0) {
    return (
      <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
        <Topbar title={t("homework")} />
        <div className="w-full h-full flex flex-col">
          <button className="text-rose-50 text-lg bg-rose-500/75 border-2 border-white/50 rounded-xl shadow-md p-2 overflow-hidden box-border">Add Homework</button>
        </div>
      </div>
    )
  }
}

export default Homework
