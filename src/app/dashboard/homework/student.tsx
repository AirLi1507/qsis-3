import Topbar from "@/components/dashboard/topbar"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

interface TableProp {
  color: string
  title: string
  children: React.ReactNode
}

interface RowProp {
  subject: string
  name: string
  date: string
}

const Table = (prop: TableProp) => {
  const t = useTranslations("Dashboard")
  return (
    <div className="w-full min-h-60 md:min-h-45 bg-white/25 dark:bg-black/20 rounded-xl shadow-[0_0_4px_rgba(0,0,0,.25)] flex flex-col pb-2 overflow-hidden box-border">
      <div className={`text-white text-2xl font-medium w-full ${prop.color} shadow-md p-5 select-none`}>{prop.title}</div>
      <div className="w-full h-fit md:px-4 overflow-scroll box-border">
        <table className="w-full h-fit border-separate border-spacing-x-4 md:border-spacing-x-6 border-spacing-y-2.5 md:border-spacing-y-4">
          <tbody>
            <tr className="text-xl select-none">
              <th className="border-b-2 border-b-sky-600/75 p-2.5">{t("subject")}</th>
              <th className="border-b-2 border-b-sky-600/75 p-2.5">{t("name")}</th>
              <th className="border-b-2 border-b-sky-600/75 p-2.5">{t("date")}</th>
            </tr>
            {prop.children}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Row = (prop: RowProp) => {
  return (
    <tr className="text-lg">
      <td className="min-w-20 text-center row">{prop.subject}</td>
      <td className="min-w-fit w-full row">{prop.name}</td>
      <td className="min-w-32 text-center row">{prop.date}</td>
    </tr>
  )
}

const Student = () => {
  const t = useTranslations("Dashboard")
  const [hw, setHw] = useState<{ name: string, subject: string, date: string, status: number }[]>()

  async function getHomework() {
    const request = await fetch(
      "/api/homework",
      {
        method: "Post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: localStorage.uid
        })
      }
    )
    if (request.status == 200) {
      setHw(await request.json())
    }
  }

  function convertDate(n: number) {
    n = n * 1000
    const d = new Date(n)
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
  }

  useEffect(() => {
    getHomework()
  })

  return (
    <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
      <Topbar title={t("homework")} />
      <Table color="bg-emerald-500/50 dark:bg-emerald-400/65" title={t("on_time")}>
        {
          hw
          &&
          hw.map((i, key) => {
            if (i.status == 1) {
              return <Row subject={i.subject} name={i.name} date={convertDate(Number(i.date))} key={key} />
            }
          })
        }
      </Table>
      <Table color="bg-rose-500/62.5 dark:bg-rose-400/65" title={t("not_submitted")}>
        {
          hw
          &&
          hw.map((i, key) => {
            if (i.status == 0) {
              return <Row subject={i.subject} name={i.name} date={convertDate(Number(i.date))} key={key} />
            }
          })
        }
      </Table>
      <Table color="bg-yellow-500/75 dark:bg-yellow-300/75" title={t("exemptions")}>
        {
          hw
          &&
          hw.map((i, key) => {
            if (i.status == 2) {
              return <Row subject={i.subject} name={i.name} date={convertDate(Number(i.date))} key={key} />
            }
          })
        }
      </Table>
    </div>
  )
}

export default Student
