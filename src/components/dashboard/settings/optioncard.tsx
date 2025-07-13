import type { Icon } from "@tabler/icons-react"
import { useEffect, type ChangeEvent } from "react"

interface OptionCardProp {
  icon: Icon
  title: string
  name: string
  description: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}

const OptionCard = (prop: OptionCardProp) => {
  useEffect(() => {
    const selEl = document.getElementsByName(prop.name)[0] as HTMLSelectElement
    const localVal = localStorage.getItem(prop.name)
    if (localVal) {
      selEl.value = localVal
    }
  }, [])
  return (
    <div className="w-full bg-white/50 dark:bg-white/10 rounded-xl shadow-md flex flex-col md:flex-row gap-4 md:gap-0 items-center p-6.5 select-none">
      <prop.icon size={48} stroke={1.5} />
      <div className="md:ml-4 md:mr-auto flex flex-col items-center md:items-start">
        <span className="text-xl">
          {prop.title}
        </span>
        <span className="text-black/65 dark:text-white/80 text-center">
          {prop.description}
        </span>
      </div>
      <div className="md:ml-4 bg-white/50 dark:bg-white/10 rounded-md inset-shadow-[0_0_2px_rgba(0,0,0,.5)] dark:inset-shadow-none">
        <select name={prop.name} onChange={prop.onChange} className="text-center p-3 appearance-none outline-none">
          {prop.children}
        </select>
      </div>
    </div>
  )
}

export default OptionCard
