import "./logo.css";

interface Props {
  logoSize: number
  className?: string
}

const Logo = ({ logoSize, className }: Props) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className="group outerSq" style={{ width: `${2 * logoSize}px`, height: `${2 * logoSize}px` }}>
        <span className="bg-amber-300 innerSq"></span>
        <span className="bg-orange-800 innerSq"></span>
        <span className="bg-blue-700 innerSq"></span>
        <span className="bg-red-600 innerSq"></span>
      </div>
    </div>
  )
}

export default Logo
