import Topbar from "@/components/dashboard/topbar"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Row, Table } from "./common"

const Student = () => {
  const t = useTranslations("Dashboard")
  const [todo, setTodo] = useState<{ name: string, subject: string, due_date: string }[]>()
  const [hw, setHw] = useState<{ name: string, subject: string, due_date: string, status: number, submission_status: number }[]>()
  const [count, setCount] = useState({ todo: 0, on_time: 0, not_submitted: 0, exemption: 0 })

  useEffect(() => {
    async function getHomework() {
      if (todo || hw) {
        return
      }
      setTodo(await (await fetch(
        "/api/homework/todo",
        {
          credentials: "include"
        }
      )).json()
      )
      setHw(await (await fetch(
        "/api/homework/submission",
        {
          credentials: "include"
        }
      )).json()
      )
    }
    getHomework()
  })

  useEffect(() => {
    if (!hw || !todo) {
      return
    }
    for (let i = 0; i < todo.length; i++) {
      todo[i].due_date = todo[i].due_date.split("T")[0]
      setCount((prev) => ({ ...prev, todo: prev.todo + 1 }))
    }
    for (let i = 0; i < hw.length; i++) {
      hw[i].due_date = hw[i].due_date.split("T")[0]
      switch (hw[i].submission_status) {
        case 0:
          setCount((prev) => ({ ...prev, not_submitted: prev.not_submitted + 1 }))
          break
        case 1:
          setCount((prev) => ({ ...prev, on_time: prev.on_time + 1 }))
          break
        case 2:
          setCount((prev) => ({ ...prev, exemption: prev.exemption + 1 }))
          break
      }
    }
  }, [todo, hw])

  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <Topbar title={t("homework")} />
      <Table color="border-b-sky-400" title={t("todo")} total={count.todo} expand>
        {
          todo?.map((i, key) => {
            return <Row subject={i.subject} name={i.name} date={i.due_date} key={key} />
          })
        }
      </Table>
      <Table color="border-b-emerald-500/50 dark:border-b-emerald-400/65" title={t("on_time")} total={count.on_time}>
        {
          hw?.map((i, key) => {
            if (i.submission_status == 1) {
              return <Row subject={i.subject} name={i.name} date={i.due_date} key={key} />
            }
          })
        }
      </Table>
      <Table color="border-b-rose-500/62.5 dark:border-b-rose-400/65" title={t("not_submitted")} total={count.not_submitted}>
        {
          hw?.map((i, key) => {
            if (i.submission_status == 0) {
              return <Row subject={i.subject} name={i.name} date={i.due_date} key={key} />
            }
          })
        }
      </Table>
      <Table color="border-b-yellow-500/95 dark:border-b-yellow-300/95" title={t("exemptions")} total={count.exemption}>
        {
          hw?.map((i, key) => {
            if (i.submission_status == 2) {
              return <Row subject={i.subject} name={i.name} date={i.due_date} key={key} />
            }
          })
        }
      </Table>
    </div >
  )
}

export default Student
