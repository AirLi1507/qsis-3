import { IconKey, IconLockQuestion, IconUser } from "@tabler/icons-react"
import Textbox from "../../components/auth/textbox.tsx"
import Button from "../../components/auth/button.tsx"
import Anchor from "../../components/auth/anchor.tsx"
import Card from "../../components/auth/card.tsx"
import { useNavigate } from "react-router"
import { login } from "../../utils/auth.ts"

const Login = () => {
  const navigate = useNavigate()
  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const uid = (form.elements[0] as HTMLInputElement).value
    const password = (form.elements[1] as HTMLInputElement).value
    if (await login(uid, password)) {
      navigate("/dashboard")
      return
    } else {
      for (let i = 0; i < form.elements.length; i++) {
        console.log(form.elements[i].tagName)
        if (form.elements[i].tagName === "INPUT") {
          form.elements[i].parentElement!.classList.replace("border-sky-50/25", "border-rose-500/62.5")
        }
      }
      return
    }
  }
  return (
    <Card onSubmit={submit}>
      <Textbox Icon={IconUser} name="uid" placeholder="Username" required />
      <Textbox Icon={IconKey} name="password" type="password" placeholder="Password" minLength={6} required />
      <Anchor Icon={IconLockQuestion} href="/auth/reset">Forget password?</Anchor>
      <Button>Login</Button>
    </Card>
  )
}

export default Login
