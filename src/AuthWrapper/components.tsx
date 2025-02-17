import { IconProps, Icon, IconEye, IconEyeOff } from "@tabler/icons-react"
import { forwardRef, useState } from "react"

interface TextFieldProps {
  textType: "text" | "email" | "password"
  placeholder: string
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
  hidden?: boolean
  submitted?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {

  let isPassword

  if (props.textType.toString() === 'password') {
    isPassword = true
  }

  const [hidden, setHidden] = useState(true)

  return (
    <div className={`
      text-sky-800
      text-lg
      w-full
      mt-4
      bg-teal-50/40
      hover:bg-teal-50/55
      focus-within:bg-teal-50/55
      border-2
      border-sky-50/50
      ${
        props.submitted
        ? 
        `has-[:invalid]:border-red-600/50`
        :
        ``
      }
      rounded-md
      shadow-[0_0_4px_inset_rgba(0,0,127,.25)]
      flex
      justify-start
      items-center
      duration-200
    `}>
      <span className={`
        mx-1
        border-r-2
        border-r-sky-700  
        px-1
      `}>
          {<props.icon stroke={1.75} />}
      </span>
      <input
        required
        type={
          isPassword
          ?
          `${hidden ? "password" : "text"}`
          :
          `${props.textType}`
        }
        name={props.textType.toString()}
        placeholder={props.placeholder}
        minLength={isPassword ? 8 : undefined}
        className={`
        placeholder:text-slate-400
        text-lg
        w-full
        bg-transparent
        border-none
        p-2
        pl-0.5
        outline-none
      `} ref={ref} />
      {isPassword ? (
        <span onClick={(e)=>{e.preventDefault(); setHidden(hidden ? false : true)}} className={`mr-2 cursor-pointer`}>
          {hidden ? <IconEye stroke={1.75} /> : <IconEyeOff stroke={1.75} />}
        </span>
      ) : ""}
    </div>
  )
}
)

export { TextField }