import { useEffect, useState } from "react";

type ContextMenuProps = {
  children?: React.ReactNode
  className?: string
}

type ContextMenuItemProps = {
  func?: () => void
  children?: React.ReactNode | string
  className?: string
}

const ContextMenu = {
  Wrapper: ({children, className}: ContextMenuProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(()=>{
      document.oncontextmenu = (e) => {
        e.preventDefault()
        setMenuOpen(true)
        const menu = document.querySelector('#menu') as HTMLDivElement
        menu.setAttribute(
          'style',
          `
          top: ${
          (menu.clientHeight + e.pageY > document.body.clientHeight)
          ?
          e.pageY - menu.clientHeight + "px"
          :
          e.pageY + "px"
          };
          left: ${
          (menu.clientWidth + e.pageX > document.body.clientWidth)
          ?
          e.pageX - menu.clientWidth + "px"
          :
          e.pageX + "px"
          };
          `
        )
      }
      document.onclick = () => {
        setMenuOpen(false)
      }

      document.body.onresize = (ev) => {console.dir(ev)}
    })

    return (
      <div className={className + ` absolute z-50 select-none ${menuOpen ? "" : "hidden"}`} id="menu">
        {children}
      </div>
    )
  },
  Item: ({children, className, func}: ContextMenuItemProps) => {
    return (
      <div className={className} onClick={()=>{func && func()}}>
        {children}
      </div>
    )
}

}

export default ContextMenu
