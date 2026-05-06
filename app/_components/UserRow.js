import Link from 'next/link'
import { SignOutButton } from './SignOutButton'

export function UserRow({ user }) {
  if (!user) return <Link href="/login" style={{ color: '#111' }}>sign in</Link>
  return (
    <>
      <code>{user.email}</code>
      {' · '}
      <SignOutButton />
    </>
  )
}
