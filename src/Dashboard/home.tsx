import { useNavigate } from "react-router-dom"

type tabProps = {
  url: String
  color: String
  children: React.ReactNode
}

const QuickTabs = ({url, color, children}: tabProps) => {

  const navigate = useNavigate()

  return (
    <a 
      onClick={()=>{navigate(`/dashboard/${url}`)}}
      className={`
        text-white
        w-full
        h-[400px]
        bg-${color}
        rounded-2xl
        p-2
        cursor-pointer
    `}>
      {children}
    </a>
  )
}

const Home = () => {

  return (
    <>
      <div className="w-full h-full p-2 md:p-3 box-border">
        <span className="
          text-transparent
          text-4xl
          lg:text-[2.5rem]
          font-bold
          bg-gradient-to-r
          from-sky-700/60
          to-sky-900/85
          bg-clip-text
        ">Quick Navigation</span>
        <hr className="
          h-[4px]
          mt-1
          bg-gradient-to-r
          from-sky-700/60
          to-sky-900/85
          bg-clip-border
          border-t-3
          border-t-transparent
        " />
        <div className="grid grid-cols-2 gap-3 pt-3 box-border">
          <QuickTabs color="sky-500" url="profile">Profile</QuickTabs>
          <QuickTabs color="amber-400" url="homework">Homework</QuickTabs>
          <QuickTabs color="" url="ec">Extension Curriculum</QuickTabs>
        </div>
      </div>  
    </>
  )
}

export default Home