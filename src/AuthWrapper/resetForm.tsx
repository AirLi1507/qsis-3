import { FormEvent, useState } from "react"
import FormWrapper from "./formWrapper.tsx"
import { Button, Hyperlink, TextField } from "./components.tsx"
import { IconMail, IconSignLeft } from "@tabler/icons-react"
import Logo from "../Branding/logo.tsx"

const ResetForm = () => {

  const [isSubmitted, setSubmit] = useState(false)

  function resetCredentials(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('demonstration function pending to be implemented here')
  }

  return (
    <FormWrapper func={(e) => { resetCredentials(e) }}>
      <Logo logoSize={40} className="mt-8" />
      <span className="text-blue-800 text-[2.5rem] font-bold mt-5">QSIS 3</span>
      <div className="w-full mt-4 flex flex-col gap-3">
        <TextField textType="email" icon={IconMail} placeholder="Email" submitted={isSubmitted} isCorr={true} />
        <Button func={() => setSubmit(true)} text="Reset" />
        <Hyperlink text="Go Back" url="/login" icon={IconSignLeft} />
      </div>
    </FormWrapper>
  )
}

export default ResetForm
