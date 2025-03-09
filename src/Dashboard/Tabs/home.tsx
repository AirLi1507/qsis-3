import { useNavigate } from "react-router-dom"
import UserData from "../../Data/types.ts"
import { IconBallBasketball, IconBallFootball, IconBallVolleyball, IconCheckbox, IconCpu2, IconMusic, IconPiano, IconPlayCardStar, IconUserFilled, IconVideo } from "@tabler/icons-react"

type tabProps = {
  url: String
  bg: String
  children: React.ReactNode
}

const QuickTabs = ({ url, bg, children }: tabProps) => {

  const navigate = useNavigate()

  return (
    <a
      onClick={() => {
        if (window.outerWidth >= 640) {
          navigate(`/dashboard/${url}`)
        } else {
          setTimeout(() => {
            navigate(`/dashboard/${url}`)
          }, 200);
        }
      }}
      className={`
        text-xl
        sm:text-2xl
        lg:text-3xl
        tracking-tight
        text-black/25
        hover:text-zinc-50
        text-center
        font-bold
        w-full
        h-[250px]
        mt-1
        ${bg}
        border-3
        border-sky-100/72.5
        rounded-2xl
        shadow-[inset_0_0_8px_rgba(0,0,0,.25)]
        flex
        flex-col
        item-center
        cursor-pointer
        hover:translate-y-[-4.5px]
        duration-200
        overflow-hidden
        select-none
    `}>
      {children}
    </a>
  )
}

const Home = (data: UserData) => {

  const tabArray = [
    {
      bg: 'bg-teal-500',
      url: 'profile',
      content: () => {
        return (
          <>
            <span className="bg-black/25 py-2">{data.role} Profile</span>
            <div className="
              h-[40%]
              my-auto
              bg-white
              shadow-[inset_0_0_4px_rgba(0,0,0,.5)]
              flex
              justify-center
              items-center"
            >
              <IconUserFilled stroke={2} color="grey" className="scale-200" />
            </div>
          </>
        )
      }
    },
    {
      bg: 'bg-amber-400/50',
      url: 'homework',
      content: () => {
        const subjectArray = [
          {bg: "bg-rose-500", name: "Chinese", outer: true},
          {bg: "bg-green-600", name: "English"},
          {bg: "bg-yellow-500", name: "Mathematics"},
          {bg: "bg-indigo-400", name: "Integrated Science"},
          {bg: "bg-purple-600", name: "Integrated Humanities"}
        ]

        return (
          <div className="w-full h-full bg-blue-50 flex">
            <div className="w-full bg-amber-400/50 flex flex-col">
            <span className="bg-black/25 py-2">Homework</span>
              {subjectArray
              .slice()
              .reverse()
              .reduce((children, subject) => (
                <div
                  className={`
                    ${
                      subject.outer
                      ?
                      `
                      text-lg
                      text-start
                      w-[70%]
                      h-[67.5%]
                      mx-auto
                      mt-auto
                      `
                      :
                      `
                      w-full
                      h-full
                      `
                    }
                    ${subject.bg}
                    rounded-t-xl
                    shadow-[0_0_8px_rgba(0,0,0,.25)]
                    flex
                    flex-col
                    overflow-hidden
                  `}
                >
                  <span className="text-sm lg:text-lg mr-auto p-1">{subject.name}</span>
                  {children}
                </div>
              ), <></>)}
            </div>

          </div>
        )
      }
    },
    {
      bg: 'bg-red-400',
      url: 'ec',
      content: () => {
        return (
          <>
            <span className="bg-black/25 py-2">Extension Curriculum</span>
            <div className="
              w-[85%]
              h-[55%]
              lg:h-[65%]
              m-auto
              bg-white
              rounded-2xl
              shadow-[inset_0_0_4px_rgba(0,0,0,.25)]
              flex
              overflow-hidden
            ">
              <div className="
                m-auto
                grid
                grid-cols-2
                lg:flex
                lg:flex-row
                gap-2
                lg:scale-110
                xl:scale-125
              ">
                <IconBallBasketball className="text-amber-600" />
                <IconBallFootball className="text-blue-950" />
                <IconBallVolleyball className="text-yellow-500" />
                <IconVideo className="text-slate-600" />
                <IconCpu2 className="text-emerald-500" />
                <IconMusic className="text-yellow-700/55" />
                <IconPiano className="text-black" />
                <IconPlayCardStar className="text-rose-500" />
              </div>
            </div>
          </>
        )
      }
    },
    {
      bg: 'bg-blue-500',
      url: 'ss',
      content: () => {
        return (
          <>
            <span className="bg-black/25 py-2">Subject Selection</span>
            <div className="
              w-[80%]
              h-[60%]
              mx-auto
              mt-auto
              bg-white
              rounded-t-2xl
              drop-shadow-lg
              flex
              flex-col
              gap-2
              p-4
            ">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <IconCheckbox color="black" />
                  <hr className="
                    w-full
                    border-t-2
                    border-black
                    rounded-full"
                  />
                </div>
              ))}
            </div>
          </>
        )
      }
    },
    {
      bg: 'bg-green-300',
      url: 'reading',
      content: () => {
        return (
          <>
          
          </>
        )
      }
    },
  ]

  if (data.role !== "Student") {
    tabArray.push(
      {
        bg: 'bg-yellow-300',
        url: 'support',
        content: () => {
          return (
            <>
            
            </>
          )
        }
      },
      {
        bg: 'bg-sky-300',
        url: 'album',
        content: () => {
          return (
            <>
            
            </>
          )
        }
      }
    )
  }

  return (
    <>
      <div className="w-full h-full p-2 md:p-3 box-border">
        <span className="
          text-transparent
          dark:text-[#60a3cb]
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
          dark:border-t-[#60a3cb]
        " />
        <div className="grid grid-cols-2 gap-3 pt-5 pb-3 box-border">
          {tabArray.map((i, key) => {
            return (
              <QuickTabs bg={i.bg} url={i.url} key={key}>{i.content() as React.ReactNode}</QuickTabs>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
