import UserData from "../../Data/types.ts"

const Profile = ({ data }: UserData) => {
  return (
    <>
      <div className={`w-full h-fit lg:h-full flex flex-col lg:flex-row p-2`}>
        <div className={`
          h-[400px]
          mb-2
          bg-blue-100/50
          dark:bg-blue-100/5
          border-2
          border-black/15
          hover:border-sky-800/75
          dark:border-zinc-600
          dark:hover:border-sky-400
          rounded-md
          flex
          flex-col
          justify-center
          items-center
          duration-150
          lg:w-fit
          lg:h-full
          lg:justify-start
          lg:pt-8
          lg:px-6
          lg:mr-2
        `}>
          <div className="
            max-w-[240px]
            max-h-[240px]
            border-2
            border-zinc-500
            active:border-sky-300
            rounded-xl
            hover:rounded-4xl
            flex
            active:scale-[1.025]
            duration-[.4s]
            active:duration-[.1s]
            cursor-pointer
            overflow-hidden
            box-border
          ">
            <img
            /*  src={`data:image/jpeg;charset=utf-8;base64,${data.pfp}`} */
              src={data.pfp}
              alt="Avatar"
              className="
                min-w-[240px]
                min-h-[240px]
                max-w-[240px]
                max-h-[240px]
                select-none
                pointer-events-none
              "
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhB42QBXN3M3heY3e9oMJGMWRWMgG1VmEz9Q&s"
              className="
                w-[240px]
                h-[240px]
                rounded-4xl
                opacity-0
                absolute
                z-10
              "
            />
          </div>
          <span className="
            text-sky-950
            dark:text-sky-600
            text-2xl
            text-center
            mt-4
            select-none
          ">
            {data.fullname}<br />
            {
              (data.form && data.class && data.classNo)
                ?
                <span className="text-xl">{data.form.toString() + data.class}-{data.classNo.toString()}</span>
                :
                null
            }
          </span>
        </div>
        <div className={`w-full h-full flex flex-col`}>
          <div className={`
            w-full
            h-[600px]
            border-2
            border-black/15
            hover:border-sky-800/75
            dark:border-zinc-600
            dark:hover:border-sky-400
            rounded-md
            duration-150
          `}>

          </div>
          <div className={`
            w-full
            h-[700px]
            lg:h-full
            mt-2
            bg-blue-200
            dark:bg-blue-200/20
            border-2
            border-black/15
            hover:border-sky-800/75
            dark:border-zinc-600
            dark:hover:border-sky-400
            rounded-md
            p-2
            duration-150
          `}>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
