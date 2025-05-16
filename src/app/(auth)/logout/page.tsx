"use client"

import AuthCard from "@/components/authWrapper/card";
import Logo from "@/components/brand/logo";
import logout from "@/utils/logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter()
  useEffect(() => {
    logout(function() { router.push("/login") })
  }, [router])
  return (
    <AuthCard>
      <Logo logoSize={40} className="mt-8 mb-4" />
      <span className="text-sky-700 text-4xl text-center font-bold select-none">QSIS 3</span>
      <span className="text-sky-900/75 text-xl text-center font-medium my-4 select-none">Loading...</span>
    </AuthCard>
  )
}

export default Logout
