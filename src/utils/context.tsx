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

interface userInterface {
  chi_name?: string,
  eng_name?: string,
  form?: number,
  className?: string,
  classNo?: number,
  role?: number
}

export const UserContext = createContext({} as userInterface)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSWR<userInterface>("/api/v1/user", fetcher("json"))
  if (data) {
    return (
      <UserContext.Provider value={data}>
        {children}
      </UserContext.Provider>
    )
  }
}
