import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fetchCategory, fetchByMain } from './fetch'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get a Recipe',
  description: 'Get recipe to meals all over the world',
}
// export const metadata = {
//   openGraph: {
//     title: 'Get a Recipe',
//     description: 'Get recipe to meals all over the world',
//     // url: 'https://nextjs.org',
//     // siteName: 'Next.js',
//     images: [
//       {
//         url: '/opengraph-image.jpg', // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: '/opengrapgh-image.jpg', // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: 'My alt',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// }
// fetchCategory();
fetchByMain("cheese");
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
