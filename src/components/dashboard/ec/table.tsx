import { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface TableProp {
  title: string
  data: {
    name: string,
    description: string,
    teacher: string,
    cost: number
  }[]
}

const Table = (prop: TableProp) => {
  const { t } = useTranslation()
  useEffect(() => {
    console.log(prop.data)
  }, [])
  return (
    <div className="mx-2 mt-4 bg-white/45 dark:bg-black/10 shadow-md dark:shadow-black/20 rounded-xl p-6">
      <table className="w-full">
        <thead className="select-none">
          <tr>
            <th className="text-start text-xl min-w-fit border-b-1 border-b-black/25 dark:border-b-white/25 pb-2 px-4">{t("ec.name")}</th>
            <th className="text-start text-xl min-w-fit border-b-1 border-b-black/25 dark:border-b-white/25 pb-2 px-4">{t("ec.description")}</th>
            <th className="text-center text-xl min-w-fit border-b-1 border-b-black/25 dark:border-b-white/25 pb-2 px-4">{t("ec.teacher")}</th>
            <th className="text-end text-xl min-w-fit border-b-1 border-b-black/25 dark:border-b-white/25 pb-2 px-4">{t("ec.cost")} (HK$)</th>
          </tr>
        </thead>
        <tbody>
          {
            prop.data.map((i, key) => {
              return (
                <tr key={key}>
                  <td className="text-start text-lg border-b-1 dark:border-b-white/50 pt-6 pb-2 px-4">{i.name}</td>
                  <td className="text-start text-lg border-b-1 dark:border-b-white/50 pt-6 pb-2 px-4">{i.description}</td>
                  <td className="text-center text-lg border-b-1 dark:border-b-white/50 pt-6 pb-2 px-4">{i.teacher}</td>
                  <td className="text-end text-lg border-b-1 dark:border-b-white/50 pt-6 pb-2 px-4">{i.cost}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
