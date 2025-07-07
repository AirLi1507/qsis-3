import { IconEye, IconEyeOff, type Icon } from "@tabler/icons-react"
import { useState } from "react"

interface TextboxProp extends React.HTMLProps<HTMLInputElement> {
  Icon: Icon
}

const Textbox = ({ Icon, ...prop }: TextboxProp) => {
  const [hidden, setHidden] = useState<boolean>(true)
  return (
    <div className="text-sky-900/75 text-lg w-full bg-sky-50/55 hover:bg-sky-50/75 focus-within:bg-sky-50/75 border-2 border-sky-50/25 rounded-md inset-shadow-[0_0_4px_rgba(0,0,0,.25)] flex p-2 duration-100">
      <span className="mr-1.5 border-r-2 border-r-sky-900/75 flex pr-1">
        <Icon stroke={1.5} className="m-auto" />
      </span>
      <input {...prop} className="text-lg m-auto w-full outline-none" type={prop.type === "password" ? (hidden ? "password" : "text") : prop.type} />
      {
        prop.type === "password"
        &&
        <span className="m-auto flex cursor-pointer" onClick={() => setHidden(!hidden)}>
          {
            hidden
              ?
              <IconEye stroke={1.5} />
              :
              <IconEyeOff stroke={1.5} />
          }
        </span>
      }
    </div>
  )
}

export default Textbox
