import Topbar from "@/components/dashboard/topbar"
import { useTranslations } from "next-intl"
import { useRef } from "react"

const Teacher = () => {
  const t = useTranslations("Dashboard")
  const subjectRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const uidRef = useRef<HTMLInputElement>(null)
  const idRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLInputElement>(null)

  async function addHomework(e: React.FormEvent) {
    e.preventDefault()
    if (!subjectRef.current || !nameRef.current || !dateRef.current) {
      return
    }
    const request = await fetch(
      "/api/homework/add",
      {
        method: "Post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: subjectRef.current.value,
          name: nameRef.current.value,
          date: Math.round(new Date(dateRef.current!.value).getTime() / 1000)
        })
      }
    )
    if (request.status == 200) {
      alert("OK")
      return
    }
  }

  async function confirmHomework(e: React.FormEvent) {
    e.preventDefault()
    if (!uidRef.current || !idRef.current || !statusRef.current) {
      return
    }
    const request = await fetch(
      "/api/homework/confirm",
      {
        method: "Post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: idRef.current.value,
          uid: uidRef.current.value,
          status: statusRef.current.value
        })
      }
    )
    if (request.status == 200) {
      alert("OK")
      return
    }
  }
  return (
    <div className="w-full h-full flex flex-col gap-4 p-2 overflow-y-scroll box-border">
      <Topbar title={t("homework")} />
      <div className="w-full h-full flex flex-col gap-4">
        <form className="bg-white/50 border-2 border-black/25 rounded-xl flex flex-col gap-2 p-2 overflow-hidden box-border" onSubmit={(e) => { addHomework(e) }}>
          <input type="text" name="subject" placeholder="Subject" ref={subjectRef} />
          <input type="text" name="name" placeholder="Homework Name" ref={nameRef} />
          <input type="date" name="date" placeholder="Date" ref={dateRef} />
          <input type="submit" value="Add Homework" className="text-rose-50 text-lg text-center bg-rose-500/75 border-2 border-white/50 rounded-xl shadow-md p-2 overflow-hidden box-border cursor-pointer" />
        </form>

        <form className="bg-white/50 border-2 border-black/25 rounded-xl flex flex-col gap-2 p-2 overflow-hidden box-border" onSubmit={(e) => { confirmHomework(e) }}>
          <input type="text" name="uid" placeholder="uid" ref={uidRef} />
          <input type="number" name="id" placeholder="homework id" ref={idRef} />
          <input type="number" name="status" placeholder="status" ref={statusRef} />
          <input type="submit" value="Confirm" className="text-green-50 text-lg text-center bg-green-500/75 border-2 border-white/50 rounded-xl shadow-md p-2 overflow-hidden box-border cursor-pointer" />
        </form>
      </div>
    </div>
  )
}

export default Teacher
