"use client"
import { useEffect, useState } from "react"
import refresh from "../../utils/refresh"

const Dashboard = () => {
  const [refreshOk, setRefreshStatus] = useState(false)
  useEffect(() => {
    const checkRefresh = async () => { if (await refresh()) { setRefreshStatus(true) } }
    checkRefresh()
  }, [])
  return <div className={`h-20 ${refreshOk ? "flex" : "hidden"}`}>Hi</div>
}

export default Dashboard

