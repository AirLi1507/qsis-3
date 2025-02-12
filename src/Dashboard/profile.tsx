import UserData from "../Data/types.ts"

const Profile = (data: UserData) => {

  return (
    <>
      <div className={`w-full h-full flex flex-col md:flex-row p-2`}>
        <div className={`
          w-full
          h-[900px]
          mb-2
          bg-red-400
          rounded-md
          flex
          justify-center
          items-center
          lg:w-[600px]
          lg:h-full
          lg:items-start
          lg:pt-12
          sm:mr-2
        `}>
          <div className={`h-[300px] w-[300px] bg-sky-50`}>
            PFP
          </div>
        </div>
        <div className={`w-full h-full flex flex-col`}>
          <div className={`w-full h-[600px] bg-amber-400 rounded-md`}>

          </div>
          <div className={`w-full h-full mt-2 bg-green-200 rounded-md`}>

          </div>
        </div>
      </div>  
    </>
  )
}

export default Profile
