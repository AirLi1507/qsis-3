import { IconArrowNarrowLeft, IconArrowNarrowRight, IconRefresh, IconCode, IconZoomCode, IconDoorExit } from "@tabler/icons-react"

const cnMenuDefaultUpper = [
  {text: 'Back', icon: IconArrowNarrowLeft, func: ()=>{history.back()}},
  {text: 'Foward', icon: IconArrowNarrowRight, func: ()=>{history.forward()}},
  {text: 'Reload', icon: IconRefresh, func: ()=>{window.location.reload()}},
]

const cnMenuDefaultLower = [
  {text: 'Page Source', icon: IconCode, bgOverride: 'hover:bg-green-500/75', func: ()=>{window.open("https://github.com/AirLi1507/qsis-3")}},
  {text: 'Inspect', icon: IconZoomCode, bgOverride: 'hover:bg-amber-500/80', func: ()=>{alert('Press F12 to enable Inspector')}},
  {text: 'Logout', icon: IconDoorExit, bgOverride: 'hover:bg-rose-400', func: ()=>{location.replace('/login')}},
]

export { cnMenuDefaultLower, cnMenuDefaultUpper }
