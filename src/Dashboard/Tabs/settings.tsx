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
  dark:text-white
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

  const localConfig = JSON.parse(localStorage.getItem('userPreference') as string)

  const userPref = {
    theme: 0
  }

  function setTheme() {
    document.querySelectorAll('input').forEach((e) => {
      if (e.name === "theme" && e.checked) {
        userPref.theme = Number(e.value)
      }
    }
    )
    if (userPref.theme == 0) {
      document.getElementById('root')?.classList.remove('dark')
    } else {
      document.getElementById('root')?.classList.add('dark')
    }
    localStorage.setItem('userPreference', JSON.stringify(userPref))
  }

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
        <div className="w-fit ml-auto border-2 border-indigo-900 rounded-md flex overflow-hidden box-border" onClick={()=>{setTheme()}}>
          <RadioCard className={cardClass2} name="theme" value="0" checked={0 == localConfig.theme}>Light</RadioCard>
          <RadioCard className={cardClass2} name="theme" value="1" checked={1 == localConfig.theme}>Dark</RadioCard>
        </div>

      </div>
    </div>
  )
}

export default Settings
