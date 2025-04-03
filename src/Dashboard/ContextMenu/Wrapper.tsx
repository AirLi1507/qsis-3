import { useEffect, useState } from "react";

interface ContextMenuProps {
  children?: React.ReactNode
  className?: string
}

interface ContextMenuItemProps {
  func?: () => void
  children?: React.ReactNode
  className?: string
}

const ContextMenu = {
  Wrapper: ({ children, className }: ContextMenuProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [onMenu, setOnMenu] = useState<boolean>(false)

    function showMenu(e: MouseEvent) {
      if (!onMenu) {
        setMenuOpen(true)
        const menu = document.querySelector('#menu') as HTMLDivElement
        menu.style.setProperty(
          "top",
          (menu.offsetHeight + e.pageY > document.body.offsetHeight)
            ?
            e.pageY - menu.offsetHeight + "px"
            :
            e.pageY + "px"
        )
        menu.style.setProperty(
          "left",
          (menu.offsetWidth + e.pageX > document.body.offsetWidth)
            ?
            e.pageX - menu.offsetWidth + "px"
            :
            e.pageX + "px"
        )
      }
    }

    useEffect(() => {
      document.body.oncontextmenu = (e) => {
        e.preventDefault()
        showMenu(e)
      }
      document.onclick = () => {
        setMenuOpen(false)
      }
      window.onresize = () => {
        const menu = document.querySelector('#menu') as HTMLDivElement
        (menu.offsetTop + menu.offsetHeight > document.body.offsetHeight)
          &&
          menu.style.setProperty(
            "top",
            document.body.offsetHeight - menu.offsetHeight + "px"
          );
        (menu.offsetLeft + menu.offsetWidth > document.body.offsetWidth)
          &&
          menu.style.setProperty(
            "left",
            document.body.offsetWidth - menu.offsetWidth + "px"
          )
      }
    })

    return (
      <div
        className={
          `
          ${className}
          absolute
          select-none
          ${menuOpen
            ?
            `z-50`
            :
            "-z-50"
          }
          `
        }
        id="menu"
        onMouseOver={() => { setOnMenu(true) }}
        onMouseOut={() => { setOnMenu(false) }}
      >
        {children}
      </div>
    )
  },
  Item: ({ children, className, func }: ContextMenuItemProps) => {
    return (
      <div className={className} onClick={() => { func && func() }}>
        {children}
      </div>
    )
  }

}

export default ContextMenu
