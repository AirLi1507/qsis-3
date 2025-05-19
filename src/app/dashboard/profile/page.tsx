"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const Profile = () => {
  const [pfpSrc, setPfpSrc] = useState<undefined | string>(undefined)
  useEffect(() => {
    async function getPfp() {
      const request = await fetch(
        "/api/pfp",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              accessToken: localStorage.getItem("accessToken"),
              uid: localStorage.getItem("uid")
            }
          )
        }
      )
      const blob = await request.blob()
      const url = URL.createObjectURL(blob)
      setPfpSrc(url)
      return
    }
    if (!pfpSrc) {
      getPfp()
    }
  })
  return (
    <div className="flex flex-col">
      <span>profoleee</span>
      {
        pfpSrc
        &&
        <Image src={pfpSrc} alt="Student Photo" width={160} height={160} />
      }
    </div>
  )
}

export default Profile
