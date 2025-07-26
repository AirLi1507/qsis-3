import { useTranslation } from "react-i18next"
import useSWR from "swr"
import { fetcher } from "../../utils/fetcher.ts"
import Topbar from "../../components/dashboard/topbar.tsx"
import Table from "../../components/dashboard/ec/table.tsx"
import Form from "../../components/dashboard/ec/form.tsx"

const ExtensionCurriculum = () => {
  const { t } = useTranslation()

  const attended = useSWR<{ name: string, description: string, teacher: string, cost: number }[]>("/api/v1/ec/attendance", fetcher("json")).data
  const available = useSWR<{ ec_id: number, name: string, description: string, teacher: string, cost: number }[]>("/api/v1/ec/list", fetcher("json")).data

  return (
    <>
      <Topbar title={t("tab_name.ec")} rounded />
      <div className="mt-2 md:mt-4 flex flex-col gap-4 md:gap-6 p-2">
        <Table title={t("ec.attended")} data={attended} defaultExpand />
        <Table title={t("ec.available")} data={available} />
        <Form max_opt={3} data={available} />
      </div>
    </>
  )
}

export default ExtensionCurriculum
