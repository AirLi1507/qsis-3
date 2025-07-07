import "./logo.css"

interface LogoProp {
  size: number
  spin?: boolean
}

const Logo = (prop: LogoProp) => {
  return (
    <div className={`grid grid-cols-2 rotate-45 ${prop.spin ? "spin" : "hover:rotate-[36045deg] duration-[120s] cursor-wait group"}`} style={{ width: prop.size, height: prop.size }}>
      <span className={`bg-amber-300 ${prop.spin ? "rounded-[50%] shadow-sm scale-80" : "logoInner"}`}></span>
      <span className={`bg-orange-800 ${prop.spin ? "rounded-[50%] shadow-sm scale-80" : "logoInner"}`}></span>
      <span className={`bg-blue-700 ${prop.spin ? "rounded-[50%] shadow-sm scale-80" : "logoInner"}`}></span>
      <span className={`bg-rose-600 ${prop.spin ? "rounded-[50%] shadow-sm scale-80" : "logoInner"}`}></span>
    </div >
  )
}

export default Logo
