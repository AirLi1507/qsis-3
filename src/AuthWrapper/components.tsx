import { IconProps, Icon, IconEye, IconEyeOff } from "@tabler/icons-react"
import { forwardRef, useState } from "react"
import { useNavigate } from "react-router-dom"

interface TextFieldProps {
  textType: "text" | "email" | "password"
  placeholder: string
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
  hidden?: boolean
  submitted?: boolean
  isCorr?: boolean
}

interface HyperlinkProps {
  url?: string
  text: string
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
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
      ${
        props.submitted
        ? 
        `has-[:invalid]:border-rose-400`
        :
        ``
      }
      ${
        props.isCorr
        ?
        `border-sky-50/50`
        :
        `border-rose-400`
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
        autoCapitalize="none"
        name={props.textType.toString()}
        placeholder={props.placeholder}
        minLength={isPassword ? 8 : undefined}
        className={`
        placeholder:text-slate-400
        text-lg
        w-full
        bg-transparent
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

const Hyperlink = (prop: HyperlinkProps) => {

  const navigate = useNavigate()

  return (
    <div className="w-full mt-2.5">
      <a onClick={()=>{navigate(`${prop.url}`)}} className={`
          text-sky-800
          hover:text-sky-50
          font-semibold
          w-fit
          flex
          hover:drop-shadow-[0_1px_1px_rgba(0,89,138,.5)]
          duration-150
          cursor-pointer
          select-none
      `}>
          {prop.icon? <prop.icon stroke={1.75} className="mr-1" /> : <></>}
          <span>{prop.text}</span>
      </a>
    </div>
  )
}

export { TextField, Hyperlink }
