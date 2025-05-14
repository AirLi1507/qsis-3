import "./layout.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-svw h-svh authBackground">
      <div className="w-full h-full bg-transparent backdrop-blur-xl backdrop-brightness-105 p-1.5 md:p-2 xl:p-3">
        <div className="w-full h-full authBackground rounded-2xl shadow-[0_0_8px_inset_rgba(0,0,0,.25)] flex justify-center items-center overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
