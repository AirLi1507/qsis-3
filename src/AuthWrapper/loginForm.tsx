import { FormEvent, useRef, useState } from "react";
import Logo from "../Branding/logo.tsx"
import FormWrapper from "./formWrapper.tsx"
import { IconKey, IconLockQuestion, IconUser } from '@tabler/icons-react';
import { Button, Hyperlink, TextField } from "./components.tsx";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate()

    const formRef = useRef<HTMLFormElement>(null)

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [isSubmitted, setSubmit] = useState(false)
    const [formFilled, setFormFill] = useState(false)

    const [corrState, setCorr] = useState(false)

    function login(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setFormFill(true)
      // Change the below part of code for acutal authentication code
      // This is just for development testing propose
      if (usernameRef?.current?.value === "user@local" && passwordRef?.current?.value === "password") {
        navigate('/dashboard')
      } else {setCorr(false)}
    }

    return (
        <FormWrapper func={(e)=>{login(e)}} ref={formRef}>
          <Logo logoSize={40} className="mt-8" />
          <span className="text-blue-800 text-[2.5rem] font-bold mt-5">QSIS 3</span>
          <div className="mt-4 flex flex-col gap-3">
            <TextField textType="email" icon={IconUser} placeholder="Username" submitted={isSubmitted} isCorr={formFilled ? corrState : true} ref={usernameRef}/>
            <TextField textType="password" icon={IconKey} placeholder="Password" submitted={isSubmitted} isCorr={formFilled ? corrState : true} ref={passwordRef} />
            <Hyperlink text="Forget password?" url="/reset" icon={IconLockQuestion} />
            <Button func={()=>{setSubmit(true)}} text="Login" />
          </div>
        </FormWrapper>
    )
}

export default LoginForm
