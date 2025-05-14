export default async function login(e: React.FormEvent, uid: string, password: string) {
  e.preventDefault()
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
  const result: Promise<boolean> = await request.json()
  console.log(await result)
}
