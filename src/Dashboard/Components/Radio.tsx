import { useEffect } from "react"

interface RadioCardItemProps {
  name: string
  value: string
  children?: React.ReactNode
  className?: string
  checked?: () => boolean
}

const RadioCard = (props: RadioCardItemProps) => {
  useEffect(() => {
    (document.getElementById(props.value) as HTMLInputElement).checked = props.checked!()
  })
  return (
    <label htmlFor={props.value} className={`radioCard ${props.className}`}>
      <input type="radio" name={props.name} value={props.value} id={props.value} className="hidden" />
      <span>{props.children}</span>
    </label>
  )
}

export { RadioCard }
