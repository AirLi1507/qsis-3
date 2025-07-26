import { useTranslation } from "react-i18next"
import Topbar from "../../components/dashboard/topbar.tsx"
import Markdown from "react-markdown"
import { useState } from "react"
import { IconCaretDownFilled, IconCaretUpFilled, IconRefresh } from "@tabler/icons-react"

const ILearn = () => {
  const { t } = useTranslation()
  const [summary, setSummary] = useState(t("ilearn.not_generated"))
  const [generating, setGenerating] = useState(false)
  const [summaryExpand, setSummaryExpand] = useState(false)

  async function getSummary() {
    const request = await fetch(
      "/api/v1/ai/gradeSummary",
      {
        credentials: "include"
      }
    )

    if (request.ok) {
      setGenerating(false)
      setSummary(await request.text())
    } else {
      setSummary("Could not generate AI summary based on your grades, please contact the developer.")
    }
  }
  return (
    <>
      <Topbar title={t("tab_name.ilearn")} rounded />
      <div className={`${!summaryExpand && "max-h-15"} my-4 mx-2 bg-white/45 dark:bg-white/5 rounded-xl shadow-md overflow-hidden box-border`}>
        <div className="text-xl font-medium w-full bg-white/50 dark:bg-white/25 shadow-md flex p-4 select-none">
          {t("ilearn.summary")}
          <span className={`ml-auto duration-250 ${generating ? "opacity-50 pointer-events-none" : "cursor-pointer"}`} onClick={
            () => {
              setGenerating(true)
              setSummaryExpand(true)
              setSummary(`${t("auth.loading")}...`)
              getSummary()
            }}>
            <IconRefresh stroke={1.5} className={generating ? "animate-spin" : "animate-none"} />
          </span>
          <span className="ml-2 cursor-pointer" onClick={() => setSummaryExpand(!summaryExpand)}>
            {
              summaryExpand
                ?
                <IconCaretUpFilled stroke={1.5} />
                :
                <IconCaretDownFilled stroke={1.5} />
            }
          </span>
        </div>
        <div className="prose dark:prose-invert min-w-full p-4">
          <Markdown>
            {summary}
          </Markdown>
        </div>
      </div>
      <div className="">
      </div>
    </>
  )
}

export default ILearn
