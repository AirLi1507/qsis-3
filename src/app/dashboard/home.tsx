import { IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconFilePencil } from "@tabler/icons-react"
import Tab from "../../components/dashboard/home/tab"
import Topbar from "../../components/dashboard/topbar"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("dashboard.quick_nav")} rounded />
      <div className="h-fit mt-4 flex flex-col md:grid md:grid-cols-2 gap-4 px-2 pb-4">
        <Tab href="profile" icon={IconAddressBook} title={t("dashboard.profile")} description={t("dashboard.profile_desc")} />
        <Tab href="profile" icon={IconFilePencil} title={t("dashboard.homework")} description={t("dashboard.homework_desc")} />
        <Tab href="profile" icon={IconBallBasketball} title={t("dashboard.ec")} description={t("dashboard.ec_desc")} />
        <Tab href="profile" icon={IconBooks} title={t("dashboard.reading")} description={t("dashboard.reading_desc")} />
        <Tab href="profile" icon={IconCheckbox} title={t("dashboard.ss")} description={t("dashboard.ss_desc")} />
      </div>
    </>
  )
}

export default Home
