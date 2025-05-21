"use client";

import AuthCard from "@/components/authWrapper/card"
import Logo from "@/components/brand/logo"
import Textbox from "@/components/authWrapper/textbox"
import Hyperlink from "@/components/authWrapper/link";
import Button from "@/components/authWrapper/button"
import login from "../../../utils/login";
import refresh from "../../../utils/refresh";
import { IconKey, IconLockQuestion, IconUser } from "@tabler/icons-react"
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LangProvider } from "@/app/context";

const LoginPage = () => {

  const t = useTranslations("Auth")

  const uidRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  async function submit(e: React.FormEvent) {
    const authResult = await login(e, uidRef.current!.value, passwordRef.current!.value)
    if (!authResult) {
      uidRef.current!.parentElement!.classList.replace("border-sky-50/25", "border-rose-400/80")
      uidRef.current!.parentElement!.classList.replace("text-sky-900/75", "text-rose-400")
      passwordRef.current!.parentElement!.classList.replace("border-sky-50/25", "border-rose-400/80")
      passwordRef.current!.parentElement!.classList.replace("text-sky-900/75", "text-rose-400")
    } else {
      localStorage.setItem("uid", uidRef.current!.value)
      router.push("/dashboard")
    }
  }

  useEffect(() => {
    refresh()
  }, [])
  return (
    <LangProvider>
      <AuthCard onSubmit={(e) => { submit(e) }} >
        <Logo logoSize={40} variant="hover" className="mt-8 mb-4" />
        <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
        <Textbox type="text" name="uid" placeholder={t("username")} Icon={IconUser} required ref={uidRef} />
        <Textbox type="password" minLength={6} name="password" placeholder={t("password")} Icon={IconKey} required ref={passwordRef} />
        <Hyperlink href="/reset" icon={IconLockQuestion}>{t("forget")}</Hyperlink>
        <Button>{t("login")}</Button>
      </AuthCard>
    </LangProvider>
  )
}

export default LoginPage
