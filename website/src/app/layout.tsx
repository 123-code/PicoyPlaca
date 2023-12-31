"use client"
import './globals.css'
import { Provider } from 'react-redux'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import store from './ReduxStore'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
   <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Provider>
 
  )
}
