import { IconProps, Icon, IconEye, IconEyeOff } from "@tabler/icons-react"
import { forwardRef, HTMLInputTypeAttribute, useState } from "react"
import { useNavigate } from "react-router-dom"

interface TextFieldProps {
  textType: HTMLInputTypeAttribute
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

type ButtonProps = {
  func: () => void
  text: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {

  const [hidden, setHidden] = useState(true)

  const isPassword = props.textType === 'password'

  return (
    <div className={`
      text-sky-800
      text-lg
      w-full
      bg-teal-50/40
      hover:bg-teal-50/55
      focus-within:bg-teal-50/55
      border-2
      ${props.submitted
        ?
        `has-[:invalid]:border-amber-400`
        :
        ``
      }
      ${props.isCorr
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
            (
              hidden
                ?
                "password"
                :
                "text"
            )
            :
            props.textType
        }
        autoCapitalize="none"
        name={props.textType.toString()}
        placeholder={props.placeholder}
        minLength={props.textType === 'password' ? 8 : undefined}
        className={`
        placeholder:text-slate-400
        text-lg
        w-full
        bg-transparent
        p-2
        pl-0.5
        outline-none
      `} ref={ref} />
      {props.textType === 'password' ? (
        <span onClick={(e) => { e.preventDefault(); setHidden(hidden ? false : true) }} className={`mr-2 cursor-pointer`}>
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
    <div className="w-full">
      <a onClick={() => { navigate(`${prop.url}`) }} className={`
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
        {prop.icon ? <prop.icon stroke={1.75} className="mr-1" /> : <></>}
        <span>{prop.text}</span>
      </a>
    </div>
  )
}

const Button = ({ func, text }: ButtonProps) => {
  return (
    <input type="submit" value={text} onClick={func} className={`
      text-sky-800
      hover:text-teal-50
      active:text-teal-50
      text-lg
      font-bold
      w-full
      bg-teal-50/70
      hover:bg-sky-800/60
      active:bg-sky-800/60
      border-2
      border-sky-50/50
      hover:border-sky-50/85
      rounded-md
      shadow-[0_0_4px_inset_rgba(0,0,127,.25)]
      p-2
      duration-300
      cursor-pointer
    `} />
  )
}

export { TextField, Hyperlink, Button }
