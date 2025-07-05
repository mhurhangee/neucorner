import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="container">
      <p className="text-xs font-light md:text-sm">by michael hurhangee</p>
      <p className="text-xs md:text-sm">
        <Link href="mailto:m.hurhangee@me.com" className="mr-4 lowercase">
          email
        </Link>
        <Link href="https://github.com/mhurhangee" className="lowercase">
          github
        </Link>
      </p>
    </footer>
  )
}
