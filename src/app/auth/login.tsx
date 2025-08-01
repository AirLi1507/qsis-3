import { IconKey, IconLockQuestion, IconUser } from "@tabler/icons-react"
import Textbox from "../../components/auth/textbox.tsx"
import Button from "../../components/auth/button.tsx"
import Anchor from "../../components/auth/anchor.tsx"
import Card from "../../components/auth/card.tsx"
import { useNavigate } from "react-router"
import { login } from "../../utils/auth.ts"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

const Login = () => {
  const { t } = useTranslation()
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
    <>
      <Helmet>
        <title>QSIS 3 - {t("auth.login")}</title>
        <meta name="description" content="QSIS 3 Login Page" />
      </Helmet>
      <Card onSubmit={submit}>
        <Textbox Icon={IconUser} name="uid" placeholder={t("auth.username")} required />
        <Textbox Icon={IconKey} name="password" type="password" placeholder={t("auth.password")} minLength={6} required />
        <Anchor Icon={IconLockQuestion} href="/auth/reset">{t("auth.forget_pw")}</Anchor>
        <Button>{t("auth.login")}</Button>
      </Card>
    </>
  )
}

export default Login
