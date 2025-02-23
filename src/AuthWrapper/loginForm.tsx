import { FormEvent, useRef, useState } from "react";
import Logo from "../Branding/logo.tsx"
import FormWrapper from "./formWrapper.tsx"
import { IconKey, IconLockQuestion, IconUser } from '@tabler/icons-react';
import { Hyperlink, TextField } from "./components.tsx";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate()

    const formRef = useRef<HTMLFormElement>(null)

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [isSubmitted, setSubmit] = useState(false)

    const [isCorr, setCorr] = useState(false)

    function login(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (usernameRef?.current?.value === "user@local" && passwordRef?.current?.value === "password") {
        navigate('/dashboard')
      } else {setCorr(false); console.log('not corr')}
    }

    return (
        <FormWrapper func={(e)=>{login(e)}} ref={formRef}>
            <Logo logoSize={40} className="mt-8" />
            <span className="text-blue-800 text-[2.5rem] font-bold mt-5">QSIS 3</span>
            <TextField textType="email" icon={IconUser} placeholder="Username" submitted={isSubmitted} isCorr={isSubmitted ? isCorr : true} ref={usernameRef}/>
            <TextField textType="password" icon={IconKey} placeholder="Password" submitted={isSubmitted} isCorr={isSubmitted ? isCorr : true} ref={passwordRef} />
            <Hyperlink text="Forget password?" url="/login" icon={IconLockQuestion} />
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
