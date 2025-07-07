export async function getBasicInfo(callback: (arg: { chi_name: string, eng_name: string, class: string, classNo: number }) => void) {
  const request = await fetch(
    "/api/info/basic",
    {
      credentials: "include"
    }
  )
  if (request.status == 200) {
    callback(await request.json())
  }
}
