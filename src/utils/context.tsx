import { createContext, useEffect, useState, type SetStateAction } from "react";

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
  chi_name: undefined,
  eng_name: undefined,
  form: undefined,
  className: undefined,
  classNo: undefined
}

export const UserContext = createContext({ user: {} as userInterface })

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(
    {
      chi_name: undefined,
      eng_name: undefined,
      form: undefined,
      className: undefined,
      classNo: undefined
    }
  )
  useEffect(() => {
    async function getUser() {
      const request = await fetch(
        "/api/info/user",
        {
          credentials: "include"
        }
      )
      return await request.json()
    }
    async function request() {
      setUser(await getUser())
      return
    }
    request()
  }, [])
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
