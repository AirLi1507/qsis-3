const Topbar = ({ title }: { title: string }) => {
  return (
    <span className="text-2xl font-medium w-full bg-white/45 dark:bg-white/20 rounded-lg shadow-[0_0_4px_rgba(0,0,0,.25)] p-6 duration-750 select-none">{title}</span>
  )
}

export default Topbar
