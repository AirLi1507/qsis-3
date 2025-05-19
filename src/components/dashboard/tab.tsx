"use client"
import { Icon } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface TabProps {
  children?: React.ReactNode
  href: string
  icon?: Icon
}

const Tab = ({ ...prop }: TabProps) => {
  return (
    <Link href={prop.href} className={`mx-3 w-65 h-12 ${prop.href === usePathname() ? "text-white bg-sky-600/50" : "hover:bg-sky-300/15"} rounded-4xl flex items-center duration-300 p-3 cursor-pointer select-none`}>
      {
        prop.icon
        &&
        <prop.icon stroke={1.5} className="mr-1.5" />
      }
      {prop.children}
    </Link >
  )
}

export default Tab
