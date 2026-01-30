import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
        <div className="nav-logo">
            <Link href={"/"}>Gadaplus</Link>
        </div>
        <div className="nav-links">
            <Link href={"/"}>Home</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
        </div>
    </nav>
  )
}