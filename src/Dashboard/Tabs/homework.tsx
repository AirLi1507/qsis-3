import UserData from "../../Data/types.ts"

type CountBlocksProps = {
  children?: React.ReactNode
}

const homeworkData = {}

const CountBlocks = ({ children }: CountBlocksProps) => {
  return (
    <div className="
      bg-blue-100/45
      border-2
      border-black/15
      hover:border-sky-800/75
      rounded-lg
      flex-1
      duration-150
    ">
      {children}
    </div>
  )
}

const Homework = (data: UserData) => {

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
        <CountBlocks></CountBlocks>
        <CountBlocks></CountBlocks>
        <CountBlocks></CountBlocks>
      </div>
      <div className="
        w-full
        bg-sky-200/35
        border-2
        border-black/15
        hover:border-sky-900/85
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
