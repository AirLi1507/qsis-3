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
    <>
<<<<<<< HEAD
      <div className="flex flex-row gap-2 p-3 overflow-x-scroll">
=======
      <div className="flex flex-row gap-2 overflow-x-scroll">
>>>>>>> refs/remotes/origin/main
        <RadioCard className={cardClass1} name="idk" value="val1">idk1</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val2">idk2</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val3" checked>idk3</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val4">idk4</RadioCard>
        <RadioCard className={cardClass1} name="idk" value="val5">idk5</RadioCard>
      </div>
<<<<<<< HEAD
      <hr className="border-t-2 border-t-sky-600/75" />
      <div className="p-3">
        <div className="w-fit border-2 border-indigo-900 rounded-md flex overflow-hidden box-border">
          <RadioCard className={cardClass1} name="ik" value="one" checked>1. One</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="two">2. Two</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="three">3. Three</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="four">4. Four</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="five">5. Five</RadioCard>
=======
      <hr className="my-3 border-t-2 border-t-sky-700/60" />

      <div className="w-[100%] border-2 border-sky-700/60 rounded-xl flex flex-row items-center p-4 box-border">
        <span className="text-lg">Theme</span>
        <div className="w-fit ml-auto border-2 border-indigo-900 rounded-md flex overflow-hidden box-border">
          <RadioCard className={cardClass2} name="ik" value="one" checked>Light</RadioCard>
          <RadioCard className={cardClass2} name="ik" value="two">Dark</RadioCard>
>>>>>>> refs/remotes/origin/main
        </div>
      </div>

    </>
  )
}

export default Settings
