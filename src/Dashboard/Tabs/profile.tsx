import UserData from "../../Data/types.ts"

const Profile = (data: UserData) => {

  // const firstName = data.fullname.split(" ")[0]

  return (
    <>
      <div className={`w-full h-fit lg:h-full flex flex-col lg:flex-row p-2`}>
        <div className={`
          w-full
          h-[400px]
          mb-2
          bg-blue-100/50
          border-b-cyan-300
          rounded-md
          flex
          flex-col
          justify-center
          items-center
          lg:w-fit
          lg:h-full
          lg:justify-start
          lg:pt-12
          lg:px-6
          sm:mr-2
        `}>
          <img
            src=""
            alt="Student Photo"
            className="
              bg-white
              w-[240px]
              h-[240px]
              rounded-lg
            " 
          />
          <span className="
            text-2xl
            text-center
            mt-4
          ">
            {data.fullname}<br/>
            {
              (data.form && data.class && data.classNo)
              ?
              `${data.form.toString() + data.class.toString()}-${data.classNo.toString()}`
              :
              ``
            }
          </span>
        </div>
        <div className={`w-full h-full flex flex-col`}>
          <div className={`w-full h-[600px] bg-amber-400 rounded-md`}>

          </div>
          <div className={`w-full h-full mt-2 bg-green-200 rounded-md p-2`}>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
