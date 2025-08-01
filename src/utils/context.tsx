import { createContext, useEffect, useState, type SetStateAction } from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher.ts";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (() => { }) as React.Dispatch<SetStateAction<string>>
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const storedTheme = localStorage.theme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

interface UserInterface {
  chi_name?: string,
  eng_name?: string,
  form?: number,
  className?: string,
  classNo?: number,
  role?: number
}

export const UserContext = createContext({} as UserInterface)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSWR<UserInterface>("/api/v1/user", fetcher("json"))
  if (data) {
    return (
      <UserContext.Provider value={data}>
        {children}
      </UserContext.Provider>
    )
  }
}

interface CurriculumInterface {
  ec_id: number,
  name: string,
  description: string,
  teacher: string
  cost: number
}

interface EcInterface {
  list?: CurriculumInterface[],
  attended?: CurriculumInterface[]
}

export const EcContext = createContext<EcInterface>({})

export const EcProvider = ({ children }: { children: React.ReactNode }) => {
  const list = useSWR<CurriculumInterface[]>("/api/v1/ec/list", fetcher("json"))
  const attended = useSWR<CurriculumInterface[]>("/api/v1/ec/attendance", fetcher("json"))

  return (
    <EcContext.Provider value={{ list: list.data, attended: attended.data }}>
      {children}
    </EcContext.Provider>
  )
}
