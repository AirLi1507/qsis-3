import { IconArrowNarrowLeft, IconArrowNarrowRight, IconRefresh, IconCode, IconZoomCode, IconDoorExit } from "@tabler/icons-react"

const Menus = () => {

  let cnMenuDefaultUpper: Array<any> = [
    { text: 'Back', icon: IconArrowNarrowLeft, func: () => { history.back() } },
    { text: 'Foward', icon: IconArrowNarrowRight, func: () => { history.forward() } },
    { text: 'Reload', icon: IconRefresh, func: () => { window.location.reload() } },
  ]

  let cnMenuDefaultLower: Array<any> = [
    { text: 'Page Source', icon: IconCode, bg: 'hover:bg-green-500/87.5', func: () => { window.open("https://github.com/AirLi1507/qsis-3") } },
    { text: 'Inspect', icon: IconZoomCode, bg: 'hover:bg-orange-400/75', func: () => { alert('Press F12 to enable Inspector') } },
    { text: 'Logout', icon: IconDoorExit, bg: 'hover:bg-rose-500/75', func: () => { localStorage.removeItem('login'); location.replace('/login') } },
  ]

  return [cnMenuDefaultUpper, cnMenuDefaultLower]
}

export { Menus }
