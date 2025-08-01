import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar.tsx"
import Table from "../../components/dashboard/ec/table.tsx"
import Form from "../../components/dashboard/ec/form.tsx"
import { useContext } from "react"
import { EcContext, EcProvider } from "../../utils/context.tsx"
import { Helmet } from "react-helmet"

const EcLayout = () => {
  const { t } = useTranslation()

  const { list, attended } = useContext(EcContext)

  return (
    <>
      <Helmet>
        <title>QSIS 3 | {t("tab_name.ec")}</title>
        <meta name="description" content="QSIS 3 Dashboard Extension Curriculum Tab" />
      </Helmet>
      <Topbar title={t("tab_name.ec")} rounded />
      <div className="mt-2 md:mt-4 flex flex-col gap-4 md:gap-6 p-2">
        <Table title={t("ec.attended")} data={attended} />
        <Table title={t("ec.available")} data={list} />
        <Form max_opt={3} data={list} />
      </div>
    </>
  )
}

const ExtensionCurriculum = () => {
  return (
    <EcProvider><EcLayout /></EcProvider>
  )
}

export default ExtensionCurriculum
