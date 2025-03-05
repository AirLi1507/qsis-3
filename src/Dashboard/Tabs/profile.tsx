import UserData from "../../Data/types.ts"

const Profile = (data: UserData) => {
  return (
    <>
      <div className={`w-full h-fit lg:h-full flex flex-col lg:flex-row p-2`}>
        <div className={`
          w-full
          h-[400px]
          mb-2
          bg-blue-100/50
          border-2
          border-black/15
          hover:border-sky-800/75
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
          sm:mr-2
        `}>
          <img
            src={`data:image/jpeg;charset=utf-8;base64,${data.pfp}`}
            alt="Avatar"
            className="
              bg-white
              min-w-[240px]
              max-h-[240px]
              border-2
              border-zinc-500
              active:border-sky-300
              rounded-xl
              hover:rounded-4xl
              active:scale-[1.025]
              duration-[.4s]
              active:duration-[.1s]
              cursor-pointer
              select-none
            "
          />
          <span className="
            text-2xl
            text-center
            mt-4
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
            border-2
            border-black/15
            hover:border-sky-800/75
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
