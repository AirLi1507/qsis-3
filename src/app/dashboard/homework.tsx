import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"

const Homework = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("tab_name.homework")} rounded />

    </>
  )
}

export default Homework
