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

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(()=>{
      const root = document.getElementById('root')
      root?.addEventListener('contextmenu',(e)=>{
        e.preventDefault()
        setMenuOpen(true)
        const menu = document.getElementById('menu') as HTMLDivElement
        if (menu) {
          menu.style.top = e.pageY + 'px'
          menu.style.left = e.pageX + 'px'
        }
      })
      root?.addEventListener('click',(e)=>{
        e.preventDefault()
        setMenuOpen(false)
      })
    })

    return (
      menuOpen
        ?
        <div className={className + " absolute z-50"} id="menu" onClick={(e)=>{e.preventDefault()}}>
          {children}
        </div>
        :
        undefined
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
