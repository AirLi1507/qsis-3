import { Avatar } from "@radix-ui/themes"
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
          bg-red-400
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
          <Avatar
            size={"8"}
            radius="full"
            fallback="A"
          />
          <span>
            {data.fullname}
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
