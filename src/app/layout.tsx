import { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./global.css"

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
    <html lang="en" className={ubuntu.className} translate="no">
      <body>
        <div className="w-svw h-svh bg-[url('https://cdn.hypernix.dev/img/bg_portrait.webp')] lg:bg-[url('https://cdn.hypernix.dev/img/bg.webp')] bg-cover bg-no-repeat pointer-events-none">
          <div className="w-full h-full bg-transparent backdrop-blur-xl backdrop-brightness-105 p-1.5 md:p-2 xl:p-3">
            <div className="w-full h-full bg-[url('https://cdn.hypernix.dev/img/bg_portrait.webp')] lg:bg-[url('https://cdn.hypernix.dev/img/bg.webp')] bg-cover bg-no-repeat rounded-2xl shadow-[0_0_8px_inset_rgba(0,0,0,.25)] flex justify-center items-center overflow-scroll box-border pointer-events-none">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout
