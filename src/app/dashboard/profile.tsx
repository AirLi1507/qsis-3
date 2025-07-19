import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar.tsx"
import { useContext } from "react"
import { UserContext } from "../../utils/context.tsx"
import { fetcher } from "../../utils/fetcher.ts"
import useSWR from "swr"

const Profile = () => {
  const { chi_name, eng_name, form, className, classNo } = useContext(UserContext)
  const { t } = useTranslation()

  let pfp: string = ""
  const { data } = useSWR("/api/v1/user/pfp", fetcher("blob", "get"))
  if (data) {
    pfp = URL.createObjectURL(data)
  }

  return (
    <>
      <Topbar title={t("tab_name.profile")} rounded />
      <div className="w-full mt-4 flex flex-col md:flex-row gap-6 md:gap-4 items-center p-2 overflow-hidden box-border">
        <img src={pfp} height={160} width={160} className="min-w-[160px] min-h-[214px] rounded-xl shadow-md dark:shadow-white/25" />
        <div className="w-full min-h-56 bg-white/45 dark:bg-white/5 rounded-lg shadow-md flex flex-col p-4 overflow-hidden box-border">
          <span className="text-2xl mb-4 border-b-2 pb-1 select-none">{t("profile.basic_info")}</span>
          <span className="text-xl"><span className="mr-2 select-none">{t("profile.fullname")}:</span>{chi_name} {eng_name}</span>
          {
            form && className && classNo
              ?
              <span className="text-lg"><span className="mr-2 select-none">{t("profile.class")}:</span>{form + className}-{classNo}</span>
              :
              null
          }
        </div>
      </div>
    </>
  )
}

export default Profile
