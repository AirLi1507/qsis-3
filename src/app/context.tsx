"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "universal-cookie"

interface langContextInterface {
  lang: string
  setLang: (lang: string) => void
}

const LangContext = createContext<langContextInterface | undefined>(undefined)

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("en-US")
  const cookies = new Cookies
  useEffect(() => {
    const storedLang = cookies.get("lang")
    if (storedLang != undefined) {
      setLang(storedLang)
    }
  }, [])
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error("LangProvider not found!")
  }
  return context
}
