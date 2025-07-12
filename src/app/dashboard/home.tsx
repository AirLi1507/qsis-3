import { IconAddressBook, IconBallBasketball, IconBooks, IconCheckbox, IconFilePencil } from "@tabler/icons-react"
import Tab from "../../components/dashboard/home/tab"
import Topbar from "../../components/dashboard/topbar"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Topbar title={t("home.quick_nav")} rounded />
      <div className="h-fit mt-4 flex flex-col md:grid md:grid-cols-2 gap-4 px-2 pb-4">
        <Tab href="profile" icon={IconAddressBook} title={t("tab_name.profile")} description={t("home.profile_desc")} />
        <Tab href="profile" icon={IconFilePencil} title={t("tab_name.homework")} description={t("home.homework_desc")} />
        <Tab href="profile" icon={IconBallBasketball} title={t("tab_name.ec")} description={t("home.ec_desc")} />
        <Tab href="profile" icon={IconBooks} title={t("tab_name.reading")} description={t("home.reading_desc")} />
        <Tab href="profile" icon={IconCheckbox} title={t("tab_name.ss")} description={t("home.ss_desc")} />
      </div>
    </>
  )
}

export default Home
