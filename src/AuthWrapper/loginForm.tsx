import { FormEvent, useRef, useState } from "react";
import Logo from "../Branding/logo.tsx"
import FormWrapper from "./formWrapper.tsx"
import { IconEye, IconEyeOff, IconKey, IconUser } from '@tabler/icons-react';

const LoginForm = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const [passwordHidden,setHidden] = useState(true)

    const [isSubmitted, setSubmit] = useState(false)

    const divClass = `text-sky-800 text-lg w-full mt-4 bg-teal-50/40 hover:bg-teal-50/55 focus-within:bg-teal-50/55 border-[2px] border-sky-50/50 ${isSubmitted ? `has-[:invalid]:border-red-600/50` : ""} rounded-md shadow-[0_0_4px_inset_rgba(0,0,127,.25)] flex justify-start items-center duration-200`
 
    const inputClass = `placeholder:text-slate-400 text-lg w-full bg-transparent border-none p-2 pl-0.5 outline-none`
 
    const iconClass = `mx-1 px-1 border-r-2 border-r-sky-700`
 
    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // e.currentTarget.after()
        // e.currentTarget.remove()
        alert('login idk lol')
        console.log('login idk lol')
    }

    return (
        <>
            <FormWrapper func={(e)=>{login(e)}} ref={formRef}>
                <Logo logoSize={40} className="mt-8" />
                <span className={`text-blue-800 text-[2.5rem] font-bold mt-5`}>QSIS 3</span>
                <div className={divClass}>
                    <span className={iconClass}>
                        <IconUser stroke={1.75} />
                    </span>
                    <input type="email" name="username" placeholder="Username" required className={inputClass} />
                </div>
                <div className={divClass}>
                    <span className={iconClass}>
                        <IconKey stroke={1.75} />
                    </span>
                    <input type={passwordHidden ? "password" : "text"} minLength={8} name="password" placeholder="Password" required className={inputClass} />
                    <span onClick={(e)=>{e.preventDefault(); setHidden(passwordHidden ? false : true)}} className={`mr-2 cursor-pointer`}>
                        {passwordHidden ? <IconEye stroke={1.75} /> : <IconEyeOff stroke={1.75} />}
                    </span>
                </div>
                <input type="submit" value="Login" onClick={()=>{setSubmit(true)}} className={`
                    text-sky-800
                    hover:text-teal-50
                    text-lg
                    font-bold
                    w-full
                    mt-4
                    bg-teal-50/70
                    hover:bg-sky-800/60
                    active:bg-sky-800/60
                    border-[2px]
                    border-sky-50/50
                    hover:border-sky-50/85
                    rounded-md
                    shadow-[0_0_4px_inset_rgba(0,0,127,.25)]
                    p-2
                    duration-300
                    cursor-pointer
                `} />
            </FormWrapper>
        </>
    )
}

export default LoginForm
