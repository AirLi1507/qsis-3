import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"

const SubjectSelection = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("tab_name.ss")} rounded />
    </>
  )
}

export default SubjectSelection
