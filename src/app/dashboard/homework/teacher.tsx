import Topbar from "@/components/dashboard/topbar"
import { useTranslations } from "next-intl"
import { useRef } from "react"

const Teacher = () => {
  const t = useTranslations("Dashboard")
  const subjectRef = useRef<HTMLSelectElement>(null)
  const classRef = useRef<HTMLSelectElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const uidRef = useRef<HTMLInputElement>(null)
  const idRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLInputElement>(null)

  async function addHomework(e: React.FormEvent) {
    e.preventDefault()
    if (!subjectRef.current || !nameRef.current || !dateRef.current || !classRef.current) {
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
          date: new Date(dateRef.current.value).toISOString().split('T')[0],
          className: classRef.current.value
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
    <div className="w-full h-fit flex flex-col gap-4">
      <Topbar title={t("homework")} />
      <div className="w-full flex flex-col gap-4">
        <form className="bg-white/50 dark:bg-white/10 border-2 border-black/25 rounded-xl flex flex-col gap-2.5 p-2 overflow-hidden box-border" onSubmit={(e) => { addHomework(e) }}>
          <select name="subject" className="text-lg text-center border-2 border-black/25 rounded-lg shadow-md p-2 overflow-hidden box-border cursor-pointer" ref={subjectRef}>
            <option value="Chi">Chinese</option>
            <option value="Eng">English</option>
            <option value="Maths">Mathematics</option>
            <option value="IS">IS</option>
            <option value="IH">IH</option>
            <option value="CHist">Chinese History</option>
            <option value="Geog">Geography</option>
            <option value="Music">Music</option>
            <option value="PE">PE</option>
            <option value="CL">Computer Literacy</option>
            <option value="ICT">Information & Communication Technology</option>
            <option value="VA">Visual Arts</option>
            <option value="Phy">Physics</option>
            <option value="Chem">Chemistry</option>
            <option value="Bio">Biology</option>
            <option value="BAFS">BAFS</option>
            <option value="Econ">Economy</option>
            <option value="M2">M2</option>
            <option value="PSE">PSE</option>
          </select>
          <select name="className" className="text-lg text-center border-2 border-black/25 rounded-lg shadow-md p-2 overflow-hidden box-border cursor-pointer" ref={classRef}>
            <option value="3A">3A</option>
          </select>
          <input required type="text" name="name" placeholder="Homework Name" className="text-lg border-2 border-black/10 rounded-lg inset-shadow-[0_0_2px_rgba(0,0,0,.25)] p-2 overflow-hidden box-border outline-none" ref={nameRef} />
          <input required type="date" name="date" placeholder="Date" className="text-lg border-2 border-black/10 rounded-lg inset-shadow-[0_0_2px_rgba(0,0,0,.25)] p-2 overflow-hidden box-border outline-none" ref={dateRef} />
          <input type="submit" value="Add Homework" className="text-rose-50 text-lg text-center bg-rose-500/75 border-2 border-white/50 rounded-lg shadow-md p-2 overflow-hidden box-border cursor-pointer" />
        </form>

        <form className="bg-white/50 dark:bg-white/10 border-2 border-black/25 rounded-xl flex flex-col gap-2.5 p-2 overflow-hidden box-border" onSubmit={(e) => { confirmHomework(e) }}>
          <input required type="text" name="uid" placeholder="uid" className="text-lg border-2 border-black/10 rounded-lg inset-shadow-[0_0_2px_rgba(0,0,0,.25)] p-2 overflow-hidden box-border outline-none" ref={uidRef} />
          <input required type="number" name="id" placeholder="homework id" className="text-lg border-2 border-black/10 rounded-lg inset-shadow-[0_0_2px_rgba(0,0,0,.25)] p-2 overflow-hidden box-border outline-none" ref={idRef} />
          <input required type="number" name="status" placeholder="status" className="text-lg border-2 border-black/10 rounded-lg inset-shadow-[0_0_2px_rgba(0,0,0,.25)] p-2 overflow-hidden box-border outline-none" ref={statusRef} />
          <input type="submit" value="Confirm" className="text-green-50 text-lg text-center bg-green-500/75 border-2 border-white/50 rounded-lg shadow-md p-2 overflow-hidden box-border cursor-pointer" />
        </form>
      </div >
    </div >
  )
}

export default Teacher
