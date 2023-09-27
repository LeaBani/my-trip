import React from 'react'
import Link from 'next/link'

export function NavBar() {

  return (
    <header className="bg-midnight">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Link href='/mytrip'>Qui suis-je?</Link>
        <Link href='/mytrip'>Mes voyages</Link>
        <Link href='/mytrip'>Me contacter</Link>
      </nav>
    </header>
  )
}
