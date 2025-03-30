interface DataType {
  role?: string
  id?: number | string
  pfp?: string
  fullname?: string
  form?: number
  class?: "A" | "B" | "C" | "D" | "E"
  classNo?: number
}

const studentInfoSample: DataType = {
  role: "Student",
  id: 20251234,
  pfp: "https://cdn.hypernix.dev/img/elon.jpg",
  fullname: "This Is ElonMusk",
  form: 3,
  class: "A",
  classNo: 34
}

export { studentInfoSample }
