interface TopbarProp {
  title: string
  rounded?: boolean
}

const Topbar = (prop: TopbarProp) => {
  return (
    <div className={`text-2xl font-medium w-full bg-white/50 dark:bg-white/25 ${prop.rounded && "rounded-lg"} shadow-md p-6 select-none`}>
      {prop.title}
    </div>
  )
}

export default Topbar
