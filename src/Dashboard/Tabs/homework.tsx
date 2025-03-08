import UserData from "../../Data/types.ts"

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
        <div className="
          bg-blue-100/45
          border-2
          border-black/15
          hover:border-sky-800/75
          rounded-lg
          flex-1
          duration-150
        ">
        </div>
        <div className="
          bg-blue-100/45
          border-2
          border-black/15
          hover:border-sky-800/75
          rounded-lg
          flex-1
          duration-150
        ">
        </div>
        <div className="
          bg-blue-100/45
          border-2
          border-black/15
          hover:border-sky-800/75
          rounded-lg
          flex-1
          duration-150
        ">
        </div>
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
