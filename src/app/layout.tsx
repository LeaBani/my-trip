import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from '../components/NavBar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My trip',
  description: 'Blog de voyage par une passionnée',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-light">
        <NavBar/>
        <div className='bg-light flex justify-center'>{children}</div> 
      </body>
    </html>
  )
}
