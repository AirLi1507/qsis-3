"use client";

import AuthCard from "@/components/authWrapper/card";
import Logo from "@/components/brand/logo";
import Textbox from "@/components/authWrapper/textbox";
import Button from "@/components/authWrapper/button";
import Hyperlink from "@/components/authWrapper/link";
import { IconMail, IconSignLeft } from "@tabler/icons-react";
import refresh from "@/utils/refresh";
import { useEffect } from "react";

const ResetPage = () => {
  useEffect(() => {
    refresh()
  }, [])
  return (
    <AuthCard>
      <Logo logoSize={40} className="mt-8 mb-4" />
      <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
      <Textbox type="email" placeholder="Email" name="email" Icon={IconMail} required />
      <Button>Recover</Button>
      <Hyperlink href="/login" icon={IconSignLeft}>Go back</Hyperlink>
    </AuthCard>
  )
}

export default ResetPage
