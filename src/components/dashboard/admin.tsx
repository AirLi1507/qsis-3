"use client"

import { getRole } from "@/utils/role"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const AdminComponent = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<number | undefined>(undefined)
  useEffect(() => {
    getRole(setRole)
  }, [])
  if (role == undefined) {
    return <></>
  }
  if (role > 0) {
    return children
  } else {
    redirect("/dashboard")
  }
}

export default AdminComponent
