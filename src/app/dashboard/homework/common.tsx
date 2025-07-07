import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

interface TableProp {
  color: string
  title: string
  children: React.ReactNode
  total?: number
  expand?: boolean
}

interface RowProp {
  subject: string
  name: string
  date: string
}

const Table = (prop: TableProp) => {
  const t = useTranslations("Dashboard")
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    if (prop.expand) {
      setExpand(prop.expand)
    }
  }, [prop.expand])

  return (
    <div className="w-full bg-white/25 dark:bg-black/20 rounded-xl shadow-[0_0_4px_rgba(0,0,0,.25)] flex flex-col overflow-hidden">
      <div className="text-xl lg:text-2xl font-medium w-full bg-white/45 dark:bg-white/20 rounded-t-xl shadow-md flex p-4 xl:p-5 select-none cursor-pointer" onClick={() => { setExpand(!expand) }}>
        {prop.title}
        <span className="ml-2">
          ({prop.total?.toString()})
        </span>
        <span className="ml-auto flex justify-center items-center">
          {
            expand
              ?
              <IconCaretUpFilled />
              :
              <IconCaretDownFilled />
          }
        </span>
      </div>
      <div className={`${expand ? "max-h-100" : "max-h-0"} duration-500 ease-in-out transform-gpu will-change-contents overflow-y-scroll box-border`}>
        <table className="w-full border-separate border-spacing-x-4 md:border-spacing-x-6 border-spacing-y-2.5 md:border-spacing-y-4">
          <tbody>
            <tr className="text-lg md:text-xl select-none">
              <th className={`w-22 lg:w-32 header ${prop.color}`}>{t("subject")}</th>
              <th className={`header ${prop.color}`}>{t("name")}</th>
              <th className={`w-24 lg:w-36 header ${prop.color}`}>{t("date")}</th>
            </tr>
            {prop.children}
          </tbody>
        </table>
      </div>
    </div >
  )
}

const Row = (prop: RowProp) => {
  return (
    <tr className="text-lg">
      <td className="text-center row">{prop.subject}</td>
      <td className="row">{prop.name}</td>
      <td className="text-center row">{prop.date}</td>
    </tr>
  )
}

export { Table, Row }
