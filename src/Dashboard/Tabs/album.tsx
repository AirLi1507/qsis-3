import { Navigate } from "react-router-dom"
import UserData from "../../Data/types.ts"

const Album = ({ data }: UserData) => {
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
