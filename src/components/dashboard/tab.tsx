import { Icon } from "@tabler/icons-react"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

interface TabProps {
  children?: React.ReactNode
  href: Url
  icon?: Icon
}

const Tab = (prop: TabProps) => {
  return (
    <Link href={prop.href} className="text-lg mx-4 h-12 hover:bg-sky-300/15 rounded-4xl flex items-center duration-200 p-4 cursor-pointer select-none">
      {
        prop.icon
        &&
        <prop.icon stroke={1.75} className="mr-2" />
      }
      {prop.children}
    </Link>
  )
}

export default Tab
