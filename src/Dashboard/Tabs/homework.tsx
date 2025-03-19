import UserData from "../../Data/types"

type CountBlocksProps = {
  children?: React.ReactNode
  hoverOverride?: string
}

const CountBlocks = (props: CountBlocksProps) => {
  return (
    <div className={`
      text-sky-900
      dark:text-sky-500
      text-lg
      xl:text-xl
      bg-blue-100/45
      dark:bg-transparent
      border-2
      border-black/15
      dark:border-zinc-600
      rounded-lg
      flex
      items-center
      flex-1
      p-3
      duration-150
      select-none
      ${props.hoverOverride
        ?
        props.hoverOverride
        :
        "hover:border-sky-800/75 dark:hover:border-sky-500"
      }
    `}>
      {props.children}
    </div>
  )
}

const Homework = ({ data }: UserData) => {

  return (
    <div className="w-full h-[500px] flex flex-col gap-2">
      <div className="
        w-full
        flex
        flex-col
        flex-1
        lg:flex-2
        lg:flex-row
        gap-2
      ">
        <CountBlocks hoverOverride="hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400">
          Submitted:
          <span className="
            text-emerald-600
            dark:text-emerald-400
            text-2xl
            font-bold
            ml-auto
          ">
            100
          </span>
        </CountBlocks>
        <CountBlocks hoverOverride="hover:border-amber-600 hover:text-amber-600">
          Exemption:
          <span className="
            text-amber-600
            text-2xl
            font-bold
            ml-auto
          ">
            100
          </span>
        </CountBlocks>
        <CountBlocks hoverOverride="hover:border-rose-600 hover:text-rose-600">
          Missing:
          <span className="
            text-rose-600
            text-2xl
            font-bold
            ml-auto
          ">
            100
          </span>
        </CountBlocks>
        <CountBlocks>
          All:
          <span className="
            text-2xl
            font-bold
            ml-auto
          ">
            100
          </span>
        </CountBlocks>
      </div>
      <div className="
        w-full
        bg-sky-200/35
        dark:bg-blue-950/25
        border-2
        border-black/15
        dark:border-zinc-600
        hover:border-sky-900/85
        dark:hover:border-sky-400
        rounded-lg
        flex-1
        lg:flex-7
        duration-150
      ">
      </div>
    </div>
  )
}

export default Homework
