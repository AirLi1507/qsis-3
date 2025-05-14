"use client"
import { useEffect } from "react"
import refresh from "../auth/refresh"

const Dashboard = () => {
  async function checkRefresh() {
    refresh()
  }
  useEffect(() => {
    refresh()
  }, [])
  return <div>Hi</div>
}

export default Dashboard

