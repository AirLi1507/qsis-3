"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const Profile = () => {
  const [pfpSrc, setPfpSrc] = useState<undefined | string>(undefined)
  async function getPfp(uid: string) {
    const request = await fetch(
      "/api/pfp",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            accessToken: localStorage.accessToken,
            uid: uid
          }
        )
      }
    )
    if (request.status == 200) {
      const blob = await request.blob()
      const url = URL.createObjectURL(blob)
      setPfpSrc(url)
    }
    return
  }
  useEffect(() => {
    if (!pfpSrc) {
      getPfp(localStorage.uid)
    }
  })
  return (
    <div className="flex flex-col">
      <span>profoleee</span>
      {
        pfpSrc
        &&
        <Image src={pfpSrc} alt="Student Photo" width={160} height={160} className="rounded-lg border-2 border-sky-300/62.5" />
      }

      <form className="mt-4 flex flex-col" onSubmit={(e) => { e.preventDefault(); getPfp((document.getElementById("uid") as HTMLInputElement).value) }}>
        <input id="uid" name="uid" placeholder="UID" />
        <input type="submit" value="get photo" />
      </form>
    </div>
  )
}

export default Profile
