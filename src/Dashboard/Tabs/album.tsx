import { useContext } from "react"
import { UserContext } from "../../Data/context.tsx"
import { Navigate } from "react-router-dom"

const Album = () => {
  const data = useContext(UserContext)
  const noPerm = data.role == "Student"

  return (
    noPerm
      ?
      <Navigate to='/dashboard' />
      :
      <div>
        <span>idk</span>
      </div>
  )
}

export default Album
