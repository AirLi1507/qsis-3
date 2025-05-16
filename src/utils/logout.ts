export default async function logout(callback: () => void) {
  try {
    const request = await fetch("/api/auth/logout", { method: "Post", credentials: "include" })
    if (!request.ok) {
      throw new Error("Could not call logout API")
    }
  } catch (err) {
    console.error(`Could not logout,\n${err}`)
  }
  callback()
}
