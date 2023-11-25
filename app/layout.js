import { Inter } from 'next/font/google'
import './globals.css'
import 'antd/dist/reset.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Workflow Management',
  description: 'Workflow Management for managing projects in easy way',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
