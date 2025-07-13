import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"

const ILearn = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("tab_name.ilearn")} rounded />
      <div>
      </div>
    </>
  )
}

export default ILearn
