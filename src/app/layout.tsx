import { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "QSIS 3",
  description: "Third generation of the QOS Student Information System.",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.svg"
  }
}

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  display: 'swap'
})

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
