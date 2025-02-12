import { useNavigate } from "react-router-dom"
import UserData from "../Data/types.ts"

type tabProps = {
  url: String
  bg: String
  children: React.ReactNode
}

const QuickTabs = ({url, bg, children}: tabProps) => {

  const navigate = useNavigate()

  return (
    <a 
      onClick={()=>{navigate(`/dashboard/${url}`)}}
      className={`
        text-2xl
        text-white
        w-full
        h-[250px]
        ${bg}
        bg-cover
        bg-no-repeat
        rounded-2xl
        p-2
        cursor-pointer
    `}>
      {children}
    </a>
  )
}

const Home = (data: UserData) => {

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
          <QuickTabs bg="bg-blue-200" url="profile">
            {data.role} Profile
          </QuickTabs>
          <QuickTabs bg="bg-amber-400" url="homework">Homework</QuickTabs>
          <QuickTabs bg="bg-red-400" url="ec">Extension Curriculum</QuickTabs>
          <QuickTabs bg="bg-green-300" url="reading">Reading</QuickTabs>
          <QuickTabs bg="bg-blue-500" url="ss">Subject Selection</QuickTabs>
          <QuickTabs bg="bg-yellow-300" url="support">Student Support</QuickTabs>
          <QuickTabs bg="bg-sky-300" url="album">Album</QuickTabs>
        </div>
      </div>  
    </>
  )
}

export default Home
