import { FormEvent, useRef, useState } from "react";
import Logo from "../Branding/logo.tsx"
import FormWrapper from "./formWrapper.tsx"
import { IconKey, IconLockQuestion, IconUser } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
import { TextField } from "./components.tsx";

const LoginForm = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const [isSubmitted, setSubmit] = useState(false)

    const navigate = useNavigate()
 
    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        alert('login idk lol')
        console.log('login idk lol')
    }

    return (
        <FormWrapper func={(e)=>{login(e)}} ref={formRef}>
            <Logo logoSize={40} className="mt-8" />
            <span className="text-blue-800 text-[2.5rem] font-bold mt-5">QSIS 3</span>
            <TextField textType="email" icon={IconUser} placeholder="Username" submitted={isSubmitted} />
            <TextField textType="password" icon={IconKey} placeholder="Password" submitted={isSubmitted} />
            <div className="w-full mt-2.5">
                <a onClick={()=>{navigate('/dashboard')}} className={`
                    text-sky-800
                    hover:text-sky-50
                    font-semibold
                    w-fit
                    flex
                    hover:drop-shadow-[0_1px_1px_rgba(0,89,138,.5)]
                    duration-200
                    cursor-pointer
                    select-none
                `}>
                    <IconLockQuestion stroke={1.75} className="mr-1" />
                    <span>Forget password?</span>
                </a>
            </div>
            <input type="submit" value="Login" onClick={()=>{setSubmit(true)}} className={`
                text-sky-800
                hover:text-teal-50
                active:text-teal-50
                text-lg
                font-bold
                w-full
                mt-2.5
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
        </FormWrapper>
    )
}

export default LoginForm
