import { IconMail, IconSignLeft } from "@tabler/icons-react"
import Textbox from "../../components/auth/textbox.tsx"
import Button from "../../components/auth/button.tsx"
import Anchor from "../../components/auth/anchor.tsx"
import Card from "../../components/auth/card.tsx"

const Reset = () => {
  return (
    <Card onSubmit={async function(e: React.FormEvent) { e.preventDefault(); alert("havent implmented yet :(") }}>
      <Textbox Icon={IconMail} name="email" placeholder="Email" required />
      <Button>Reset</Button>
      <Anchor Icon={IconSignLeft} href="/auth/login">Go back</Anchor>
    </Card>
  )
}

export default Reset
