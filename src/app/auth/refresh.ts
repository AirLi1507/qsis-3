export default async function refresh() {
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
    if (location.pathname.split("/")[1] !== "login") {
      location.replace("/login")
    }
    return false
  } else {
    localStorage.setItem("accessToken", result)
    if (location.pathname.split("/")[1] !== "dashboard") {
      location.replace("/dashboard")
    }
    return true
  }
}
