export default async function refresh(): Promise<boolean> {
  const request = fetch(
    "/api/auth/refresh",
    {
      method: "Post",
      credentials: "include"
    }
  )
  const dataFetch: Promise<string> = (await request).text()
  const result = await dataFetch
  if (result === "false") {
    localStorage.removeItem("accessToken")
    if (location.pathname.includes("dashboard") || location.pathname.includes("api")) {
      location.href = "/login"
    }
    return false
  } else {
    localStorage.setItem("accessToken", result)
    if (!location.pathname.includes("dashboard")) {
      location.href = "/dashboard"
    }
    return true
  }
}
