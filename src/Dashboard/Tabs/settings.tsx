import { RadioCard } from "../Components/Radio"

const cardClass1 = `
  text-lg
  text-white
  has-checked:bg-blue-400
  bg-rose-500
  border-2
  border-white/50
  rounded-lg
  duration-150
  p-2
  cursor-pointer
  select-none
`

const cardClass2 = `
  text-md
  text-center
  text-black
  has-checked:text-white
  has-checked:bg-indigo-600/75
  hover:bg-indigo-600/15
  flex
  justify-center
  items-center
  duration-50
  p-2
  cursor-pointer
  select-none
`

const Settings = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 p-3 overflow-x-scroll">
        <RadioCard className={cardClass1} name="idk" value="val1">idk1</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val2">idk2</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val3" checked>idk3</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val4">idk4</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val5">idk5</RadioCard>
      </div>
      <hr className="my-3 border-t-2 border-t-sky-700/60" />
      <div className="w-[100%] border-2 border-sky-700/60 rounded-xl flex flex-row items-center p-4 box-border">
        <span className="text-lg select-none">Theme</span>
        <div className="w-fit ml-auto border-2 border-indigo-900 rounded-md flex overflow-hidden box-border">
          <RadioCard className={cardClass2} name="ik" value="one" checked>1. One</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="two">2. Two</RadioCard>
        </div>

      </div>
    </div>
  )
}

export default Settings
