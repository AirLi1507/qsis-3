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
    <Link href={prop.href} className="m-4 h-12 hover:bg-sky-200/62.5 rounded-4xl flex items-center duration-100 p-4 cursor-pointer">
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
