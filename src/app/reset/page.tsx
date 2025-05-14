"use client";

import Layout from "@/components/authWrapper/layout";
import AuthCard from "@/components/authWrapper/card";
import Logo from "@/components/brand/logo";
import Textbox from "@/components/authWrapper/textbox";
import Button from "@/components/authWrapper/button";
import Hyperlink from "@/components/authWrapper/link";
import { IconMail, IconSignLeft } from "@tabler/icons-react";

const ResetPage = () => {
  return (
    <Layout>
      <AuthCard>
        <Logo logoSize={40} className="mt-8 mb-4" />
        <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
        <Textbox type="email" placeholder="Email" name="email" Icon={IconMail} required />
        <Button>Recover</Button>
        <Hyperlink href="/login" icon={IconSignLeft}>Go back</Hyperlink>
      </AuthCard>
    </Layout>
  )
}

export default ResetPage
