"use client"

import { useEffect } from "react";
import "./logo.css";

interface Props {
  logoSize: number
  className?: string
  variant?: "spin" | "hover"
}

const Logo = ({ logoSize, className, variant }: Props) => {
  useEffect(() => {
    if (variant === "spin") {
      document.querySelector(".outerSq")?.classList.add("rotate-[36000deg]")
    }
  }, [])
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className={`group outerSq ${variant === "hover" && "hover"}`} style={{ width: `${2 * logoSize}px`, height: `${2 * logoSize}px` }}>
        <span className={`bg-amber-300 innerSq ${variant}`}></span>
        <span className={`bg-orange-800 innerSq ${variant}`}></span>
        <span className={`bg-blue-700 innerSq ${variant}`}></span>
        <span className={`bg-red-600 innerSq ${variant}`}></span>
      </div>
    </div >
  )
}

export default Logo
