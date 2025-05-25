"use client";

import AuthCard from "@/components/auth/card";
import Logo from "@/components/brand/logo";
import Textbox from "@/components/auth/textbox";
import Button from "@/components/auth/button";
import Hyperlink from "@/components/auth/link";
import { IconMail, IconSignLeft } from "@tabler/icons-react";
import refresh from "@/utils/refresh";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const ResetPage = () => {
  const t = useTranslations("Auth")
  useEffect(() => {
    refresh()
  }, [])
  return (
    <AuthCard>
      <Logo logoSize={40} variant="hover" className="mt-8 mb-4" />
      <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
      <Textbox type="email" placeholder={t("email")} name="email" Icon={IconMail} required />
      <Button>{t("recover")}</Button>
      <Hyperlink href="/login" icon={IconSignLeft}>{t("back")}</Hyperlink>
    </AuthCard>
  )
}

export default ResetPage
