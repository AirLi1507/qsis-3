import type { Icon } from "@tabler/icons-react"
import type { ChangeEvent } from "react"

interface OptionCardProp {
  icon: Icon
  title: string
  name: string
  description: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}

const OptionCard = (prop: OptionCardProp) => {
  return (
    <div className="w-full bg-white/50 rounded-xl shadow-md flex items-center p-6.5 select-none">
      <prop.icon size={48} stroke={1.5} />
      <div className="ml-4 mr-auto flex flex-col">
        <span className="text-xl">
          {prop.title}
        </span>
        <span className="text-black/65">
          {prop.description}
        </span>
      </div>
      <div className="bg-white/50 rounded-md inset-shadow-[0_0_2px_rgba(0,0,0,.5)] pr-2">
        <select name={prop.name} onChange={prop.onChange} className="p-3">
          {prop.children}
        </select>
      </div>
    </div>
  )
}

export default OptionCard
