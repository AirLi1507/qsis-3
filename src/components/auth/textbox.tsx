"use client";

import { Icon, IconEye, IconEyeOff } from "@tabler/icons-react"
import { useState } from "react"

interface TextboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: Icon
  type?: React.HTMLInputTypeAttribute
  ref?: React.Ref<HTMLInputElement>
}

const Textbox = ({ Icon, type, ref, ...props }: TextboxProps) => {

  const [hidden, setHidden] = useState(true)

  return (
    <div className="text-sky-900/75 text-lg w-full bg-sky-50/55 hover:bg-sky-50/75 focus-within:bg-sky-50/75 border-2 border-sky-50/25 rounded-md inset-shadow-[0_0_4px_rgba(0,0,0,.25)] flex p-1 duration-100" onChange={(e) => { e.currentTarget.classList.replace("border-rose-400/80", "border-sky-50/25"); e.currentTarget.classList.replace("text-rose-400", "text-sky-900/75") }}>
      {
        Icon
        &&
        <span className="border-r-2 flex m-1 mr-0.5 pr-1">
          <Icon stroke={1.75} className="m-auto" />
        </span>
      }
      <input className="text-lg w-full m-1 bg-transparent outline-none" type={type === "password" ? (hidden ? "password" : "text") : type} {...props} ref={ref} />
      {
        type === "password"
          ?
          <span onClick={() => setHidden(!hidden)} className="mr-1 flex items-center cursor-pointer">
            {
              hidden
                ?
                <IconEye stroke={1.75} />
                :
                <IconEyeOff stroke={1.75} />
            }
          </span>
          :
          undefined
      }
    </div >
  )
}

export default Textbox
