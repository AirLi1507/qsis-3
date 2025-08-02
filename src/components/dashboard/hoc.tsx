import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../utils/context"
import { useNavigate } from "react-router"

const AdminHoc = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<number>()
  const context = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    setRole(context.role)
  }, [])
  if (role == undefined) {
    return
  } else if (role > 0) {
    return children
  } else {
    navigate("/dashboard")
  }
}

export default AdminHoc
