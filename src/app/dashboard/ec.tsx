import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"
import { useEffect, useState } from "react"
import Table from "../../components/dashboard/ec/table"

const ExtensionCurriculum = () => {
  const { t } = useTranslation()
  const [ec, setEc] = useState<{ name: string, description: string, teacher: string, cost: number }[]>([])
  useEffect(() => {
    async function getList() {
      const request = await fetch(
        "/api/ec/list",
        {
          credentials: "include"
        }
      )
      if (request.ok) {
        return await request.json()
      }
    }
    async function request() {
      setEc(await getList())
      return
    }
    request()
  }, [])
  return (
    <>
      <Topbar title={t("tab_name.ec")} rounded />
      <Table title="idk" data={ec} />
    </>
  )
}

export default ExtensionCurriculum
