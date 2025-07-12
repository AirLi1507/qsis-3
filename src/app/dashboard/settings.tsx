import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react"
import OptionCard from "../../components/dashboard/settings/optioncard"
import Topbar from "../../components/dashboard/topbar"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "../../utils/context"
import { useContext } from "react"

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  return (
    <div className="w-full h-full bg-white/25 dark:bg-black/15 rounded-xl shadow-lg dark:inset-shadow-[0_0_8px_rgba(0,0,0,.1)] overflow-hidden box-border">
      <Topbar title={t("tab_name.settings")} />
      <div className="w-full h-full flex flex-col gap-4 p-4 overflow-y-scroll box-border">
        <OptionCard
          icon={theme === "light" ? IconSun : IconMoon}
          title={t("settings.theme")}
          name="theme"
          description={t("settings.theme_desc")}
          onChange={(e) => { setTheme(e.currentTarget.value); localStorage.setItem("theme", e.currentTarget.value) }}
        >
          <option value="light">{t("settings.light")}</option>
          <option value="dark" > {t("settings.dark")}</option>
        </OptionCard>
        <OptionCard
          icon={IconLanguage}
          title={t("settings.lang")}
          name="lang"
          description={t("settings.lang_desc")}
          onChange={(e) => { i18n.changeLanguage(e.currentTarget.value); localStorage.setItem("lang", e.currentTarget.value) }}
        >
          <option value="en">English</option>
          <option value="zh_Hant">正體中文</option>
        </OptionCard>
      </div>
    </div>
  )
}

export default Settings
