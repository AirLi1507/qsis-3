import { useTranslation } from "react-i18next"
import useSWR from "swr"
import { fetcher } from "../../utils/fetcher.ts"
import Topbar from "../../components/dashboard/topbar.tsx"
import Table from "../../components/dashboard/ec/table.tsx"

const ExtensionCurriculum = () => {
  const { t } = useTranslation()

  const { data } = useSWR<{ name: string, description: string, teacher: string, cost: number }[]>("/api/v1/ec/list", fetcher("json"))

  return (
    <>
      <Topbar title={t("tab_name.ec")} rounded />
      <Table title={t("ec.available")} data={data} />
    </>
  )
}

export default ExtensionCurriculum
