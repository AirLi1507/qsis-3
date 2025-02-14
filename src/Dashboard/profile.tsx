import { Avatar, Theme } from "@radix-ui/themes"
import UserData from "../Data/types.ts"

const Profile = (data: UserData) => {

  const firstName = data.fullname.split(" ")[0]

  console.log(firstName)

  return (
    <>
      <Theme>
        <div className={`w-full lg:h-full flex flex-col lg:flex-row p-2`}>
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
            lg:flex-row
            lg:items-start
            lg:pt-12
            lg:px-6
            sm:mr-2
          `}>
              <Avatar
                size="9"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
                className="scale-150"
              />
          </div>
          <div className={`w-full h-full flex flex-col`}>
            <div className={`w-full h-[600px] bg-amber-400 rounded-md`}>

            </div>
            <div className={`w-full h-full mt-2 bg-green-200 rounded-md`}>

            </div>
          </div>
        </div>
      </Theme>
    </>
  )
}

export default Profile
