import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="border fixed">
          <Link href="/">
            <a className="margin">My Blog</a>
          </Link>
          <Link href="/about">
            <a className="margin">About</a>
          </Link>
        </nav>
      </header>
    </>
  )
}