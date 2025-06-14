"use client"

import AuthCard from "@/components/auth/card";
import Logo from "@/components/brand/logo";
import logout from "@/utils/logout";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter()
  const t = useTranslations("Auth")
  useEffect(() => {
    document.body.className = ""
    const loadingText = document.getElementById("loading")
    setInterval(() => {
      if (loadingText!.innerText.length == 10) {
        loadingText!.innerText = t("loading")
      } else if (loadingText!.innerText.length < 10) {
        loadingText!.innerText += "."
      }
    }, 100)
    logout(function() { router.push("/login") })
  })
  return (
    <AuthCard>
      <Logo logoSize={40} variant="spin" className="mt-8 mb-4" />
      <span className="text-sky-700 text-4xl text-center font-bold mb-2 select-none">QSIS 3</span>
      <span className="text-sky-900/75 text-xl text-center font-medium my-4 select-none" id="loading">{t("loading")}...</span>
    </AuthCard>
  )
}

export default Logout
