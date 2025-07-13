import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"

const Reading = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("tab_name.reading")} rounded />
    </>
  )
}

export default Reading
