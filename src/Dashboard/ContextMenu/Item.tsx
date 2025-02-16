import { Icon, IconProps } from "@tabler/icons-react"
import { ContextMenu } from "radix-ui"

type cnMenuItemProps = {
  menuItem?: {
    text: String
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
    bgOverride?: String
    func: ()=>void
  }
}

const CnMenuItem = ({menuItem}: cnMenuItemProps) => {
  return (
    <ContextMenu.Item onClick={()=>{menuItem?.func()}} className={`contextMenuItem ${menuItem?.bgOverride? menuItem.bgOverride: "hover:bg-sky-700/60"}`}>
      <span className="w-full">
        {menuItem?.text}
      </span>
      {menuItem?.icon ? <menuItem.icon stroke={1.5} className="scale-90" /> : ""}
    </ContextMenu.Item>
  )
}

export default CnMenuItem