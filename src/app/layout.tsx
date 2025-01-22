import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sampurna Pyne - Cybersecurity and Web3 Professional",
  description: "Portfolio of Sampurna Pyne, a Cybersecurity and Web3 Professional",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

