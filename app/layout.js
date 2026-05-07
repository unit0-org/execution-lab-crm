import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"

const sans = Inter({ variable: "--font-inter", subsets: ["latin"] })
const serif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"] })

export const metadata = {
  title: "Execution Lab CRM",
  description: "Internal CRM for The Execution Lab",
}

export default function RootLayout({ children }) {
  const fontVars = `${sans.variable} ${serif.variable}`

  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  )
}
