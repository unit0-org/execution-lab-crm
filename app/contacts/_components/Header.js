import Link from 'next/link'
import { SignOutButton } from '@/app/_components/SignOutButton'

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}

export function Header() {
  return (
    <header style={row}>
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Contacts</h1>
      <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
        <Link href="/" style={{ color: '#111' }}>Home</Link>
        <SignOutButton />
      </nav>
    </header>
  )
}
