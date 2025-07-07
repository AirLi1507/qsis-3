"use client"

import { IconChevronCompactRight } from "@tabler/icons-react"

const Main = ({ children, callback }: { children: React.ReactNode, callback: () => void }) => {
  return (
    <main className="min-w-full flex p-2.5 lg:p-4 overflow-y-scroll box-border" >
      <span className="my-auto -ml-2 h-8 hover:bg-black/5 dark:hover:bg-white/15 rounded-lg flex opacity-0 duration-500 transform-gpu will-change-transform absolute top-[50%] z-[9999] cursor-pointer pointer-events-none" id="innerToggle" onClick={callback}>
        <IconChevronCompactRight stroke={2} className="m-auto" />
      </span>
      {children}
    </main>
  )
}

export default Main
