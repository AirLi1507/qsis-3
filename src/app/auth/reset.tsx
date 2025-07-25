import { IconMail, IconSignLeft } from "@tabler/icons-react"
import Textbox from "../../components/auth/textbox.tsx"
import Button from "../../components/auth/button.tsx"
import Anchor from "../../components/auth/anchor.tsx"
import Card from "../../components/auth/card.tsx"
import { useTranslation } from "react-i18next"

const Reset = () => {
  const { t } = useTranslation()
  return (
    <Card onSubmit={async function(e: React.FormEvent) { e.preventDefault(); alert("havent implmented yet :(") }}>
      <Textbox Icon={IconMail} name="email" placeholder={t("auth.email")} required />
      <Button>{t("auth.reset")}</Button>
      <Anchor Icon={IconSignLeft} href="/auth/login">{t("auth.back")}</Anchor>
    </Card>
  )
}

export default Reset
