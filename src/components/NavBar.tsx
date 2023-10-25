import React from 'react'
import Link from 'next/link'

export function NavBar() {

  return (
    <header className="bg-primary sticky top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 uppercase" aria-label="Global">
        <Link href='/'>Accueil</Link>
        <Link href='/mytrip'>Qui suis-je?</Link>
        <Link href='/mytrip'>Mes voyages</Link>
        <Link href='/mytrip'>Me contacter</Link>
      </nav>
    </header>
  )
}
