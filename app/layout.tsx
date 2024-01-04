import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fetchCategory, fetchByMain } from './fetch'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get a Recipe',
  description: 'Get recipe to meals all over the world',
}
// fetchCategory();
fetchByMain("cheese");
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
