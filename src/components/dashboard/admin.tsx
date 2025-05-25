"use client"

import { getRole } from "@/utils/role"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AdminComponent = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<number | undefined>(undefined)
  useEffect(() => {
    getRole(setRole)
  }, [])
  return (
    <>
      {
        role
          ?
          (
            role > 0
              ?
              children
              :
              "d"
          )
          :
          "diddy"
      }
    </>
  )
}

export default AdminComponent
