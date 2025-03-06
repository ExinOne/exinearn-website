import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ExinEarn 水龙头 - 购物返利平台",
  description: "在淘宝、京东、拼多多等平台购物，通过 ExinEarn 水龙头获得高额返利，让您的每一次消费都更划算。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'