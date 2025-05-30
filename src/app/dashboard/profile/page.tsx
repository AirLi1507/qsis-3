"use client"

import Topbar from "@/components/dashboard/topbar"
import { Icon, IconChalkboard, IconHash, IconLabelFilled } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

interface LabelProp {
  icon: Icon
  text: string
  value?: string
}

const Label = (prop: LabelProp) => {
  return (
    <div className="text-sky-900/85 dark:text-sky-50/85 w-fit border-2 border-zinc-200 dark:border-zinc-400 rounded-lg flex gap-1 items-center p-2">
      <prop.icon />
      <span className="font-medium select-none">{prop.text}</span>
      <span className="ml-1.5">{prop.value}</span>
    </div>
  )
}

const Profile = () => {
  const t = useTranslations("Dashboard")
  const cookies = new Cookies
  const [pfpSrc, setPfpSrc] = useState<undefined | string>(undefined)
  const [profile, setProfile] = useState<undefined | { name: string, class: string, classNo: number }>(undefined)
  async function getPfp(uid: string) {
    if (pfpSrc) {
      return
    }
    const request = await fetch(
      "/api/pfp",
      {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            uid: uid
          }
        )
      }
    )
    if (request.status == 200) {
      const blob = await request.blob()
      const url = URL.createObjectURL(blob)
      setPfpSrc(url)
    }
    return
  }
  async function getProfile(uid: string) {
    if (profile) {
      return
    }
    const request = await fetch(
      "/api/profile",
      {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: uid,
          lang: cookies.get("lang")
        })
      }
    )
    if (request.status == 200) {
      const result = await request.json() as { name: string, class: string, classNo: number }
      setProfile(result)
    }
    return
  }
  useEffect(() => {
    getPfp(localStorage.uid)
    getProfile(localStorage.uid)
  })
  return (
    <div className="w-full h-full m-2 flex flex-col pb-4">
      <Topbar title={t("profile")} />
      <div className="mt-4 w-full h-full bg-white/25 dark:bg-black/20 rounded-xl shadow-[0_0_4px_rgba(0,0,0,.25)] flex flex-col gap-6 p-4 lg:p-5 xl:p-6 overflow-scroll box-border">
        <div className="flex flex-col lg:flex-row gap-6 items-center xl:px-4">
          {
            pfpSrc
            &&
            <Image src={pfpSrc} width={200} height={200} alt="Profile Picture" className="h-fit rounded-xl border-2 border-black/17.5 hover:border-sky-500/62.5 inset-shadow-[0_0_4px_rgba(0,0,0,.5)] hover:shadow-[0_0_4px_rgba(0,0,0,.25)] hover:scale-[1.025] active:scale-105 active:duration-75 duration-150 cursor-pointer select-none" onContextMenu={(e) => { e.preventDefault() }} />
          }
          <div className="w-full h-67.5 bg-white/25 dark:bg-white/10 rounded-xl shadow-[0_0_4px_rgba(0,0,0,.25)] flex flex-col overflow-hidden box-border">
            <div className="text-2xl font-medium w-full bg-white/45 dark:bg-white/20 shadow-sm p-3.5 select-none">{t("basic_info")}</div>
            <div className="flex flex-col gap-2.5 p-4">
              <Label icon={IconLabelFilled} text={t("name")} value={profile && profile.name} />
              <Label icon={IconChalkboard} text={t("class")} value={profile && profile.class} />
              <Label icon={IconHash} text={t("class_no")} value={profile && profile.classNo.toString()} />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white/25 dark:bg-white/10 rounded-xl shadow-[0_0_4px_rgba(0,0,0,.25)] overflow-hidden box-border">
          <div className="text-2xl font-medium w-full bg-white/45 dark:bg-white/20 shadow-sm p-4 select-none">{t("subjects")}</div>
        </div>
      </div>
    </div >
  )
}

export default Profile
