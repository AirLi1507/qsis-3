import { IconMoon } from "@tabler/icons-react"
import OptionCard from "../../components/dashboard/settings/optioncard"
import Topbar from "../../components/dashboard/topbar"

const Settings = () => {
  return (
    <div className="w-full h-full bg-white/25 rounded-xl shadow-lg overflow-hidden box-border">
      <Topbar title="Settings" />
      <div className="w-full h-full flex flex-col gap-4 p-4 overflow-y-scroll box-border">
        <OptionCard
          icon={IconMoon}
          title="Color Preference"
          name="theme"
          description="Switching to Light/Dark mode in OpenSIS."
          onChange={(e) => { alert(e.currentTarget.value) }}
        >
          <option>Light</option>
          <option>Dark</option>
        </OptionCard>
        <OptionCard
          icon={IconMoon}
          title="Color Preference"
          name="theme"
          description="Switching to Light/Dark mode in OpenSIS."
          onChange={(e) => { alert(e.currentTarget.value) }}
        >
          <option>Light</option>
          <option>Dark</option>
        </OptionCard>
      </div>
    </div>
  )
}

export default Settings
