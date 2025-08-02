import { useTranslation } from "react-i18next"
import AdminHoc from "../../components/dashboard/hoc"
import Topbar from "../../components/dashboard/topbar"

const Album = () => {
  const { t } = useTranslation()
  return (
    <AdminHoc>
      <Topbar title={t("tab_name.album")} rounded />
    </AdminHoc>
  )
}

export default Album
