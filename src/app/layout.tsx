import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

const inter = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aceng Tunggal Perkasa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
