import { Montserrat, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { collapseScript } from "./collapseScript"
import { themeScript } from "./themeScript"

const sans = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] })
const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"]
})

export const metadata = {
  title: "Execution Lab CRM",
  description: "Internal CRM for The Execution Lab"
}

export default function RootLayout({ children }) {
  const fontVars = `${sans.variable} ${mono.variable}`

  return (
    <html lang="en" className={fontVars}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: collapseScript }} />
        {children}
      </body>
    </html>
  )
}
