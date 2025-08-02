import { useTranslation } from "react-i18next"
import AdminHoc from "../../components/dashboard/hoc"
import Topbar from "../../components/dashboard/topbar"

const Administration = () => {
  const { t } = useTranslation()
  return (
    <AdminHoc>
      <Topbar title={t("tab_name.admin")} rounded />
    </AdminHoc>
  )
}

export default Administration
