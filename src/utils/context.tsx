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
