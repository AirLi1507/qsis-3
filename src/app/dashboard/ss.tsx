import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"
import { Helmet } from "react-helmet"

const SubjectSelection = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>QSIS 3 | {t("tab_name.ss")}</title>
        <meta name="description" content="QSIS 3 Dashboard Subject Selection Tab" />
      </Helmet>
      <Topbar title={t("tab_name.ss")} rounded />
    </>
  )
}

export default SubjectSelection
