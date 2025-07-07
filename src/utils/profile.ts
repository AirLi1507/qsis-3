export async function getProfile(callback: (arg: { name: string, class: string, classNo: number }) => void) {
  const request = await fetch(
    "/api/profile",
    {
      credentials: "include"
    }
  )
  if (request.status == 200) {
    callback(await request.json())
  }
  return
}
