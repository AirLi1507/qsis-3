import { useNavigate } from "react-router"
import { useEffect } from "react"
import { logout } from "../../utils/auth.ts"
import Card from "../../components/auth/card.tsx"
import { useTranslation } from "react-i18next"

const Logout = () => {
  const { t } = useTranslation("auth")
  const navigate = useNavigate()
  useEffect(() => {
    const text = document.getElementById("loading") as HTMLSpanElement
    setInterval(() => {
      if (!text.innerText.includes("...")) {
        text.innerText += "."
      } else {
        text.innerText = t("auth.loading")
      }
    }, 100)
    async function request() {
      if (await logout()) {
        navigate("/auth/login")
      } else {
        alert("Logout failed.")
      }
    }
    request()
  }, [])
  return (
    <Card logoSpin>
      <span className="text-sky-900 text-xl select-none" id="loading">{t("auth.loading")}</span>
    </Card >
  )
}

export default Logout
