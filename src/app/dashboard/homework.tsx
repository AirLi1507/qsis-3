import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"
import { Helmet } from "react-helmet"

const Homework = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>QSIS 3 | {t("tab_name.homework")}</title>
        <meta name="description" content="QSIS 3 Dashboard Homework Tab" />
      </Helmet>
      <Topbar title={t("tab_name.homework")} rounded />

    </>
  )
}

export default Homework
