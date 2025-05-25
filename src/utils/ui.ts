import Cookies from "universal-cookie"

export function theme(value?: string, callback?: () => void) {
  if (value || (value && callback)) {
    localStorage.setItem("theme", value)
    if (value === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    if (callback) {
      callback()
    }
    return value
  } else {
    const localTheme = localStorage.theme
    if (localTheme) {
      if (localTheme === "dark") {
        document.body.classList.toggle("dark", true)
      } else {
        document.body.classList.toggle("dark", false)
      }
      const themeSelector = document.getElementsByName("theme")[0] as HTMLSelectElement
      if (themeSelector) {
        themeSelector.value = localTheme
      }
      return localTheme
    } else {
      return "light"
    }
  }
}

export async function lang(value: string) {
  const langCookie = new Cookies
  langCookie.set("lang", value, { path: "/" })
  return
}
