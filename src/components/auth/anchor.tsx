import type { Icon } from "@tabler/icons-react"
import { Link } from "react-router"

interface AnchorProp extends Omit<React.HTMLProps<HTMLAnchorElement>, "href"> {
  href: string
  Icon: Icon
}

const Anchor = ({ Icon, ...prop }: AnchorProp) => {
  return (
    <Link to={prop.href} {...prop} className="text-sky-900/75 hover:text-sky-50 text-md font-semibold -my-1 mr-auto w-fit hover:drop-shadow-[2px_2px_1px_rgba(0,0,0,.2)] flex items-center gap-1 duration-100 select-none">
      <Icon />
      {prop.children}
    </Link>
  )
}

export default Anchor
