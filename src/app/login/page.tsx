"use client";

import AuthCard from "@/components/authWrapper/card"
import Layout from "@/components/authWrapper/layout"
import Logo from "@/components/brand/logo"
import Textbox from "@/components/authWrapper/textbox"
import Hyperlink from "@/components/authWrapper/link";
import Button from "@/components/authWrapper/button"
import { IconKey, IconLockQuestion, IconUser } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react";
import login from "../auth/login";
import refresh from "../auth/refresh";

const LoginPage = () => {

  const uidRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [loggedIn, setLogin] = useState(true)

  useEffect(() => {
    const checkRefresh = async () => {
      if (!(await refresh())) {
        setLogin(false)
      }
    }
    checkRefresh()
  }, [])

  return (
    !loggedIn &&
    <Layout>
      <AuthCard onSubmit={(e) => { login(e, uidRef.current!.value, passwordRef.current!.value) }}>
        <Logo logoSize={40} className="mt-8 mb-4" />
        <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
        <Textbox type="text" name="uid" placeholder="Username" Icon={IconUser} required ref={uidRef} />
        <Textbox type="password" minLength={4} name="password" placeholder="Password" Icon={IconKey} required ref={passwordRef} />
        <Hyperlink href="/reset" icon={IconLockQuestion}>Forget password?</Hyperlink>
        <Button>Login</Button>
      </AuthCard>
    </Layout>
  )
}

export default LoginPage
