import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar"
import Markdown from "react-markdown"
import { useEffect, useState } from "react"

const ILearn = () => {
  const { t } = useTranslation()
  const [summary, setSummary] = useState("Loading...")
  useEffect(() => {
    async function getSummary() {
      const request = await fetch(
        "/api/ai/gradeSummary",
        {
          credentials: "include"
        }
      )
      if (request.ok) {
        return await request.text()
      } else {
        return "Could not generate AI summary based on your grades, please contact the developer."
      }
    }
    async function request() {
      setSummary(await getSummary())
      return
    }
    request()
  }, [])
  return (
    <>
      <Topbar title={t("tab_name.ilearn")} rounded />
      <div className="m-4 bg-white/45 dark:bg-white/5 rounded-xl shadow-md overflow-hidden box-border">
        <div className="text-xl font-medium w-full bg-white/50 dark:bg-white/25 shadow-md p-4 select-none">AI summary of your grades</div>
        <div className="prose dark:prose-invert p-4">
          <Markdown>
            {summary}
          </Markdown>
        </div>
      </div>
    </>
  )
}

export default ILearn
