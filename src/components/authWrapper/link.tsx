import { Icon } from "@tabler/icons-react"
import Link, { LinkProps } from "next/link"

interface HyperlinkProps extends LinkProps {
  children: React.ReactNode
  icon?: Icon
}

const Hyperlink = (props: HyperlinkProps) => {
  return (
    <Link href={props.href} className="text-sky-900/75 hover:text-sky-50 text-md font-semibold w-fit -my-1 hover:drop-shadow-[2px_2px_1px_rgba(0,0,0,.2)] flex gap-1 duration-100 select-none">
      {
        props.icon
        &&
        <props.icon stroke={1.75} />
      }
      <span>{props.children}</span>
    </Link>
  )
}

export default Hyperlink
