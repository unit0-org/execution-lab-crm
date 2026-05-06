import Link from 'next/link'

// Internal Next.js link with the project's default styling.
const style = { color: '#111', textDecoration: 'none' }

export function AppLink({ href, children }) {
  return <Link href={href} style={style}>{children}</Link>
}
