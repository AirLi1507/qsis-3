import { IconRocket } from "@tabler/icons-react"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Page404 = () => {

  const navigate = useNavigate()

  useEffect(()=>{

    const glowDiv = document.getElementById('glow') as HTMLDivElement

    document.addEventListener("mousemove",(e)=>{
      glowDiv.style.top = e.pageY + 'px'
      glowDiv.style.left = e.pageX + 'px'
    })
  })  

  return (
    <div className="
      w-svw
      h-svh
      bg-black
      group
      cursor-none
    ">
      <span className="
        w-full
        h-[15svh]
        bg-zinc-900/85
        rounded-[50%]
        blur-2xl
        flex
        absolute
        -top-10
        z-0
      " />
      <div className="w-svw h-svh absolute top-0 left-0 z-[1] overflow-hidden">
        <div className="
          w-[125px]
          h-[125px]
          lg:w-[175px]
          lg:h-[175px]
          bg-gradient-to-br
          from-sky-100
          to-cyan-400/95
          rounded-[50%]
          blur-2xl
          lg:blur-3xl
          opacity-25
          group-hover:opacity-60
          absolute
          -translate-x-[50%]
          -translate-y-[50%]
          duration-400
          group-hover:duration-200
          ease-initial
          " id="glow"/>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-[2] top-0 left-0 overflow-hidden">
        <span className="max-w-100 lg:max-w-full text-stone-100 text-2xl xl:text-5xl text-center font-bold md:mb-10 lg:mb-20 xl:mb-30 select-none">
          There is nothing here in the space yet...
        </span>
        <div className="
          w-65
          h-85
          bg-zinc-950/50
          border-2
          border-zinc-50/25
          hover:border-zinc-50/65
          rounded-xl
          flex
          flex-col
          items-center
          p-4
          duration-400
          md:scale-105
          lg:scale-110
          xl:scale-125
        ">
          <span className="
            text-xl
            font-semibold
            font-mono
            mb-1
            drop-shadow-[.75px_0_#fff,0_.75px_#fff,-.75px_0_#fff,0_-.75px_#fff]
            select-none
            ">
            code
          </span>
          <span className="
            text-5xl
            font-bold
            drop-shadow-[1px_0_#fff,0_1px_#fff,-1px_0_#fff,0_-1px_#fff]
            select-none
          ">
            404
          </span>
          <a className="
            text-slate-200
            hover:text-zinc-950
            text-sm
            font-semibold
            w-full
            mt-auto
            bg-zinc-950/45
            hover:bg-zinc-50/95
            border-2
            border-zinc-50/25
            hover:border-zinc-100
            rounded-lg
            flex
            gap-1.5
            justify-center
            items-center
            p-2.5
            duration-300
            ease-initial
            select-none
            cursor-pointer
          " onClick={()=>{navigate('/login')}}>
            <IconRocket stroke={1.75} />
            <span>Back to our campus</span>
          </a>
        </div>
      </div>
      <span className="
        w-full
        h-[15svh]
        bg-zinc-900/85
        rounded-[50%]
        blur-2xl
        flex
        absolute
        -bottom-10
        z-0
      " />
    </div>
  )
}

const NotFound = () => {

  const loggedIn = localStorage.getItem('login') === 'true'

  const isDashboard = location.pathname.match("dashboard")
  
  return (
    isDashboard
    ?
      loggedIn
      ?
      <Page404 />
      :
      <Navigate to="/login" />
    :
    <Page404 />
  )
}

export default NotFound
