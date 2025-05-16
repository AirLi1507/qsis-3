export default async function login(e: React.FormEvent, uid: string, password: string): Promise<boolean> {
  e.preventDefault()
  try {
    const request = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ uid: uid, password: password })
      }
    )
    if (await request.json()) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.warn(`Could not login,\n${err}`)
    return false
  }
}
