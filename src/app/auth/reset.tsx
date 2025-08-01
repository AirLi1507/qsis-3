import { IconMail, IconSignLeft } from "@tabler/icons-react"
import Textbox from "../../components/auth/textbox.tsx"
import Button from "../../components/auth/button.tsx"
import Anchor from "../../components/auth/anchor.tsx"
import Card from "../../components/auth/card.tsx"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

const Reset = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>QSIS 3 | {t("auth.reset")}</title>
        <meta name="description" content="QSIS 3 Account Reset Page" />
      </Helmet>
      <Card onSubmit={async function(e: React.FormEvent) { e.preventDefault(); alert("havent implmented yet :(") }}>
        <Textbox Icon={IconMail} name="email" placeholder={t("auth.email")} required />
        <Button>{t("auth.reset")}</Button>
        <Anchor Icon={IconSignLeft} href="/auth/login">{t("auth.back")}</Anchor>
      </Card>
    </>
  )
}

export default Reset
