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
    console.warn("Warning: Responded user role isn't an integer, the backend server may be encountering errors.")
    return false
  }
  if (callback) {
    callback(result)
    return
  }
  return result
}
