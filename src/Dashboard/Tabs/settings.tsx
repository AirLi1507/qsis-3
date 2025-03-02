import { RadioCard } from "../Components/Radio"

const checkedClass = `bg-green-300`
const uncheckedClass = `bg-sky-500`
const defaultClass = `
  text-lg
  text-white
  border-2
  border-sky-600/75
  rounded-lg
  duration-75
  p-2
`

const Settings = () => {
  return (
    <>
      <div className="flex flex-row gap-2 p-3">
        <RadioCard.Item uncheckedClass={uncheckedClass} checkedClass={checkedClass} defaultClass={defaultClass} value="val1">idk1</RadioCard.Item>
        <RadioCard.Item uncheckedClass={uncheckedClass} checkedClass={checkedClass} defaultClass={defaultClass} value="val2">idk2</RadioCard.Item>
        <RadioCard.Item uncheckedClass={uncheckedClass} checkedClass={checkedClass} defaultClass={defaultClass} value="val3">idk3</RadioCard.Item>
        <RadioCard.Item uncheckedClass={uncheckedClass} checkedClass={checkedClass} defaultClass={defaultClass} value="val4">idk4</RadioCard.Item>
        <RadioCard.Item uncheckedClass={uncheckedClass} checkedClass={checkedClass} defaultClass={defaultClass} value="val5">idk5</RadioCard.Item>
      </div>
      <RadioCard.Item uncheckedClass="e e" checkedClass="d d" defaultClass="r r" value="s s">e</RadioCard.Item>
    </>
  )
}

export default Settings
