import { useTranslation } from "react-i18next"
import AdminHoc from "../../components/dashboard/hoc"
import Topbar from "../../components/dashboard/topbar"

const Album = () => {
  const { t } = useTranslation()
  async function submit(e: React.FormEvent) {
    const form = e.currentTarget as HTMLFormElement
    const data = new FormData(form)
    const body = JSON.stringify(Object.fromEntries(data))
    const request = await fetch(
      "/api/v1/user/album",
      {
        method: "post",
        credentials: "include",
        body: body,
        headers: { "Content-Type": "application/json" }
      }
    )
    if (request.ok) {
      console.log(request.body)
    }
  }
  return (
    <AdminHoc>
      <Topbar title={t("tab_name.album")} rounded />
      <form onSubmit={submit} className="flex flex-col">
        <input name="class" placeholder="class" className="" />
        <input type="submit" value="idk" />
      </form>
    </AdminHoc>
  )
}

export default Album
