"use client"
import { useEffect } from "react"
import refresh from "../utils/refresh"

const Root = () => {
  useEffect(() => {
    refresh()
    return
  }, [])
}


export default Root
