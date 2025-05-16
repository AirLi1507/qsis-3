import { Metadata } from "next"
import "../global.css"

export const metadata: Metadata = {
  title: "QSIS 3 | Login",
  description: "Third generation of the QOS Student Information System.",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.svg"
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children
}

export default Layout
