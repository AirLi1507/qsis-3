import { IconArrowNarrowLeft, IconArrowNarrowRight, IconRefresh, IconCode, IconZoomCode, IconDoorExit } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

// type MenuType = [...{}[]]

const Menus = () => {

  const navigate = useNavigate()

  let cnMenuDefaultUpper: Array<any> = [
    {text: 'Back', icon: IconArrowNarrowLeft, func: ()=>{history.back()}},
    {text: 'Foward', icon: IconArrowNarrowRight, func: ()=>{history.forward()}},
    {text: 'Reload', icon: IconRefresh, func: ()=>{window.location.reload()}},
  ]
  
  let cnMenuDefaultLower: Array<any> = [
    {text: 'Page Source', icon: IconCode, bgOverride: 'hover:bg-green-500/75', func: ()=>{window.open("https://github.com/AirLi1507/qsis-3")}},
    {text: 'Inspect', icon: IconZoomCode, bgOverride: 'hover:bg-amber-500/80', func: ()=>{alert('Press F12 to enable Inspector')}},
    {text: 'Logout', icon: IconDoorExit, bgOverride: 'hover:bg-rose-400', func: ()=>{navigate('/login')}},
  ]
  
  return [cnMenuDefaultUpper,cnMenuDefaultLower]
}

export { Menus }
