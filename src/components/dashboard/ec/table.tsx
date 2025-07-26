import { useTranslation } from "react-i18next"
import "./table.css"
import { useState } from "react"
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react"

interface TableProp {
  title: string
  data?: {
    name: string,
    description: string,
    teacher: string,
    cost: number
  }[]
  defaultExpand?: boolean
}

const Table = (prop: TableProp) => {
  const { t } = useTranslation()
  const [expand, setExpand] = useState(prop.defaultExpand ? true : false)

  return (
    <div className={`bg-white/45 dark:bg-black/10 ${expand ? "max-h-100" : "max-h-17"} shadow-md dark:shadow-black/20 rounded-xl overflow-scroll box-border`}>
      <div className="text-xl font-medium w-full bg-white/50 dark:bg-white/25 shadow-md flex p-4 md:p-5 select-none">
        {prop.title}
        <span className="ml-auto cursor-pointer" onClick={() => setExpand(!expand)}>
          {
            expand
              ?
              <IconCaretUpFilled stroke={1.5} />
              :
              <IconCaretDownFilled stroke={1.5} />
          }
        </span>
      </div>
      <div className="px-6 py-4 md:py-6 overflow-x-scroll box-border">
        <table className="min-w-[720px] w-full">
          <thead className="select-none">
            <tr>
              <th className="text-start t-head">{t("ec.name")}</th>
              <th className="text-start t-head">{t("ec.description")}</th>
              <th className="text-center t-head">{t("ec.teacher")}</th>
              <th className="text-end t-head">{t("ec.cost")} (HK$)</th>
            </tr>
          </thead>
          <tbody>
            {
              prop.data
                ?
                prop.data.map((i, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-start t-row">{i.name}</td>
                      <td className="text-start t-row">{i.description}</td>
                      <td className="text-center t-row">{i.teacher}</td>
                      <td className="text-end t-row">{i.cost}</td>
                    </tr>
                  )
                })
                :
                null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
