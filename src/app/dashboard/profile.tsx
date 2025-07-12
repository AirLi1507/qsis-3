import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar.tsx"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../utils/context.tsx"

const Profile = () => {
  const { chi_name, eng_name, form, className, classNo } = useContext(UserContext).user
  const { t } = useTranslation()
  const [pfp, setPfp] = useState("")
  async function getPfp() {
    if (pfp) {
      return
    }
    const request = await fetch(
      "/api/pfp",
      {
        method: "post",
        credentials: "include",
      }
    )
    if (request.status == 200) {
      const blob = await request.blob()
      const url = URL.createObjectURL(blob)
      setPfp(url)
    }
    return
  }
  useEffect(() => {
    getPfp()
  }, [])
  return (
    <>
      <Topbar title={t("tab_name.profile")} rounded />
      <div className="w-full mt-4 flex gap-4 items-center p-2 overflow-hidden box-border">
        <img src={pfp} height={160} width={160} className="min-w-[160px] min-h-[214px] rounded-xl shadow-md dark:shadow-white/25 pointer-events-none" />
        <div className="w-full min-h-56 bg-white/45 dark:bg-white/5 rounded-lg shadow-md flex flex-col p-4 overflow-hidden box-border">
          <span className="text-2xl mb-4 border-b-2 pb-1 select-none">{t("profile.basic_info")}</span>
          <span className="text-xl">{chi_name} {eng_name}</span>
          {
            form && className && classNo
            &&
            <span className="text-lg">{form + className}-{classNo}</span>
          }
        </div>
      </div>
    </>
  )
}

export default Profile
