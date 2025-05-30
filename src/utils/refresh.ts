import { redirect } from "next/navigation"

export default async function refresh(): Promise<boolean> {
  const request = fetch(
    "/api/auth/refresh",
    {
      method: "Post",
      credentials: "include"
    }
  )
  const result = await (await request).text()
  if (result === "false") {
    if (location.pathname.includes("dashboard") || location.pathname.includes("api") || location.pathname === "/") {
      redirect("/logout")
    }
    return false
  } else {
    if (!location.pathname.includes("dashboard")) {
      redirect("/dashboard")
    }
    return true
  }
}
