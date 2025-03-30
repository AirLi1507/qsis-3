import { useEffect, useState } from "react";

type ContextMenuProps = {
  children?: React.ReactNode
  className?: string
}

type ContextMenuItemProps = {
  func?: () => void
  children?: React.ReactNode
  className?: string
}

const ContextMenu = {
  Wrapper: ({ children, className }: ContextMenuProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [onMenu, setOnMenu] = useState<boolean>(false)

    useEffect(() => {
      document.body.oncontextmenu = (e) => {
        e.preventDefault()
        if (!onMenu) {
          setMenuOpen(true)
          const menu = document.querySelector('#menu') as HTMLDivElement
          menu.setAttribute(
            'style',
            `
            top: ${(menu.clientHeight + e.pageY > document.body.clientHeight)
              ?
              e.pageY - menu.clientHeight + "px"
              :
              e.pageY + "px"
            };
            left: ${(menu.clientWidth + e.pageX > document.body.clientWidth)
              ?
              e.pageX - menu.clientWidth + "px"
              :
              e.pageX + "px"
            };
            `
          )
        }
      }
      document.onclick = () => {
        setMenuOpen(false)
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
