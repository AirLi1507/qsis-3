import { useNavigate } from "react-router-dom"
import UserData from "../../Data/types.ts"

const Album = (data: UserData) => {
  if (data.role !== "Teacher") {
    navigate('/')
  } else {
    return (
      <div>
        <span>idk</span>
      </div>
    )
  }
}

export default Album
