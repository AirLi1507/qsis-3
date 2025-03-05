import { useNavigate } from "react-router-dom"
import UserData from "../../Data/types.ts"

type tabProps = {
  url: String
  bg: String
  children: React.ReactNode
}

const QuickTabs = ({ url, bg, children }: tabProps) => {

  const navigate = useNavigate()

  return (
    <a
      onClick={() => { navigate(`/dashboard/${url}`) }}
      className={`
        text-4xl
        tracking-tight
        text-black/25
        hover:text-black
        text-center
        font-bold
        w-full
        h-[250px]
        mt-1
        ${bg}
        bg-cover
        bg-no-repeat
        border-3
        border-sky-100/72.5
        rounded-2xl
        shadow-[inset_0_0_8px_rgba(0,0,0,.25)]
        flex
        justify-center
        items-center
        p-2
        cursor-pointer
        hover:translate-y-[-4.5px]
        duration-200
        overflow-hidden
    `}>
      {children}
    </a>
  )
}

const Home = (data: UserData) => {

  const tabArray = [
    { bg: 'bg-amber-400', url: 'homework', text: "Homework" },
    { bg: 'bg-red-400', url: 'ec', text: "Extension Curriculum" },
    { bg: 'bg-blue-500', url: 'ss', text: "Subject Selection" },
    { bg: 'bg-green-300', url: 'reading', text: "Reading" },
    { bg: 'bg-blue-200', url: 'profile', text: `${data.role} Profile` },
  ]

  if (data.role !== "Student") {
    tabArray.push(
      { bg: 'bg-yellow-300', url: 'support', text: "Student Support" },
      { bg: 'bg-sky-300', url: 'album', text: "Album" }
    )
  }

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
        <div className="grid grid-cols-2 gap-3 pt-5 pb-3 box-border">
          {tabArray.map((i, key) => {
            return (
              <QuickTabs bg={i.bg} url={i.url} key={key}>{i.text}</QuickTabs>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
