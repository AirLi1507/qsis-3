import { Metadata } from "next"
import { Noto_Sans_TC, Ubuntu } from "next/font/google"
import "./global.css"
import { getLocale } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

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

const nototc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap"
})

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale()
  return (
    <html lang={locale} className={`${ubuntu.className} ${nototc.className}`}>
      <body>
        <div className="w-svw h-svh bg-[url('https://cdn.hypernix.dev/img/bg_portrait.webp')] lg:bg-[url('https://cdn.hypernix.dev/img/bg.webp')] bg-cover bg-no-repeat pointer-events-none overflow-hidden box-border">
          <div className="w-full h-full bg-transparent backdrop-blur-xl backdrop-brightness-105 dark:backdrop-brightness-50 p-1.5 md:p-2 xl:p-2.5 duration-150">
            <div className="w-full h-full bg-[url('https://cdn.hypernix.dev/img/bg_portrait.webp')] lg:bg-[url('https://cdn.hypernix.dev/img/bg.webp')] bg-cover bg-no-repeat rounded-2xl shadow-[0_0_8px_inset_rgba(0,0,0,.25)] flex justify-center items-center overflow-scroll box-border pointer-events-none">
              <NextIntlClientProvider locale={locale}>
                {children}
              </NextIntlClientProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout
