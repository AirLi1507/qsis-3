export async function getRole(callback: (arg: number) => void) {
  const request = await fetch(
    "/api/role",
    {
      "method": "Post",
      "credentials": "include"
    }
  )
  const result = await request.json()
  if (typeof result != "number") {
    return false
  }
  if (callback) {
    callback(result)
    return
  }
  return result
}
