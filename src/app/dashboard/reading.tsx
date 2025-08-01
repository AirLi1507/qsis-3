import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"
import { Helmet } from "react-helmet"

const Reading = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>QSIS 3 | {t("tab_name.reading")}</title>
        <meta name="description" content="QSIS 3 Dashboard Reading Tab" />
      </Helmet>
      <Topbar title={t("tab_name.reading")} rounded />
    </>
  )
}

export default Reading
