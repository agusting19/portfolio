import Header from "~/_components/Header"
import { Locale, i18n } from "~/i18n-config"
import "../../../styles/globals.css"

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  params,
  children,
}: {
  params: { lang: Locale }
  children: React.ReactNode
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-background">
        <Header />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: "Agustin Gomez - Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}
