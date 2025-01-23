import React, { useEffect, useRef } from "react";
import {HeroUIProvider, Switch} from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const Dashboard = () => {
  const [darkMode,setDarkMode] = React.useState(true)

  // const main = useRef(null<HTMLElement>)

  // if (!darkMode) {
  //   main.current
  // }

  // useEffect(()=>{
  //   if (darkMode) {
  //     main.current.remove()
  //   }
  // },[])
  return (
    <>
      <HeroUIProvider>
        <main className="dark text-foreground w-lvw h-lvh bg-background">
          <Switch defaultSelected isSelected={darkMode} onValueChange={setDarkMode} size="lg" startContent={<IconSun stroke={2} />} endContent={<IconMoon stroke={2} />}>Dark Mode</Switch>
        </main>
      </HeroUIProvider>
    </>
  )
}

export default Dashboard