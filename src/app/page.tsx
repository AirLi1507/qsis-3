"use client"
import { useEffect } from "react"
import refresh from "./auth/refresh"

const Root = () => {
  useEffect(() => {
    refresh()
    return
  }, [])

}


export default Root
