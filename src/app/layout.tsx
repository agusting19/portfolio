import Header from "~/_components/Header"
import "../../styles/globals.css"

export const metadata = {
  title: "Agustin Gomez - Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        {children}
      </body>
    </html>
  )
}
