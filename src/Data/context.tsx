import { createContext } from "react";

interface DataType {
  role?: string
  id?: number | string
  pfp?: string
  fullname?: string
  form?: number
  class?: "A" | "B" | "C" | "D" | "E"
  classNo?: number
}

export const UserContext = createContext<DataType>({})

export const DataProvider = ({ children, data }: { children: React.ReactNode, data: DataType }) => {
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider >
  )
}
