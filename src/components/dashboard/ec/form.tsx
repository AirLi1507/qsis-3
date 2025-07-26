import { useTranslation } from "react-i18next"

interface FormProp {
  max_opt?: number,
  data?: {
    ec_id: number,
    name: string,
    description: string,
    teacher: string,
    cost: number
  }[]
}

const Select = ({ children, name }: { children: React.ReactNode, name: string }) => {
  const { t } = useTranslation()
  function handleChange() {
    const allOpt = document.querySelectorAll("option")
    const allSel = document.querySelectorAll("select")
    allOpt.forEach((el) => {
      const val = el.value
      allSel.forEach((sel) => {
        if (val === sel.value) {
          el.disabled = true
        }
      })
    })
    allSel.forEach((el) => {
      const val = el.value
      el.querySelectorAll("option").forEach((el) => {
        if (el.value === val) {
          el.disabled = false
        }
      })
    })
  }
  return (
    <select name={name} className="w-full bg-white/45 dark:bg-white/10 rounded-lg shadow-md p-4 outline-none appearance-none cursor-pointer" onChange={handleChange} defaultValue="">
      <option value="">{t("ec.select")}</option>
      {children}
    </select>
  )
}

const Form = (prop: FormProp) => {
  const { t } = useTranslation()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    if (!form) {
      return
    }
    const data = new FormData(form)
    const body = JSON.stringify(Object.fromEntries(data))
    const request = await fetch(
      "/api/v1/ec/join",
      {
        method: "post",
        body: body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
      }
    )
    if (request.ok) {
      if (await request.json()) {
        alert("Successful registration for specified EC(s).")
        return
      } else {
        alert("Could not join specified EC(s).")
        return
      }
    } else {
      alert("Could not join specified EC(s) due to internal problem(s).")
    }
    return
  }

  return (
    <form className="bg-white/45 dark:bg-black/10 shadow-md dark:shadow-black/20 rounded-xl flex flex-col overflow-hidden box-border" action="post" onSubmit={submit}>
      <div className="text-xl font-medium w-full bg-white/50 dark:bg-white/25 shadow-md p-4 md:p-5 select-none">{t("ec.registration")}</div>
      <div className="flex flex-col gap-2 md:gap-4 p-4">
        {
          prop.max_opt
            ?
            [...Array(prop.max_opt)].map(
              (_i, key) => {
                return <Select name={key.toString()} key={key}>
                  {
                    prop.data
                      ?
                      prop.data.map((i, key) => {
                        return (
                          prop.data
                            ?
                            < option value={prop.data[key].ec_id} key={key} > {i.name}</option>
                            :
                            null
                        )
                      })
                      :
                      null
                  }
                </Select>
              })
            :
            null
        }
        <input type="submit" value={t("ec.submit")} className="w-full bg-white/80 dark:bg-white/25 rounded-lg shadow-md p-4 cursor-pointer" />
      </div>
    </form >
  )
}

export default Form
