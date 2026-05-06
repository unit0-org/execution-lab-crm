import Link from 'next/link'
import { appLinkStyle } from './AppLink.styles'

// Internal Next.js link with the project's default styling.
export function AppLink({ href, children }) {
  return <Link href={href} style={appLinkStyle}>{children}</Link>
}
