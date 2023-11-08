import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Electronics store',
  description: 'No description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p className='p-4 bg-grey-900'>Root Layout</p>
        </header>
        <div className='bg-grey-900 text-white'>
          <div className='p-4 border-2 border-gray-500'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
