import type { Icon } from "@tabler/icons-react"
import { Link } from "react-router"

interface TabProp extends React.HTMLProps<HTMLAnchorElement> {
  href: string
  icon: Icon
  title: string
  description: string
}

const Tab = ({ ...prop }: TabProp) => {
  return (
    <Link to={prop.href} className="text-black/50 dark:text-white/25 hover:text-black dark:hover:text-white w-full min-h-42 max-h-fit bg-white/25 dark:bg-black/10 hover:bg-white/75 dark:hover:bg-black/5 border-2 border-transparent dark:hover:border-white rounded-xl shadow-md flex p-4 overflow-hidden box-border duration-150" {...prop}>
      <prop.icon size={64} />
      <div className="mt-1 ml-2 flex flex-col">
        <span className="text-3xl font-semibold">{prop.title}</span>
        <span className="text-xl">{prop.description}</span>
      </div>
    </Link>
  )
}

export default Tab
