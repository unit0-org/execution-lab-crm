import { AppLink } from '@/ui/AppLink'
import { Code } from '@/ui/Code'
import { SignOutForm } from '@/ui/SignOutForm'

function SignedIn({ email }) {
  return (
    <>
      <Code>{email}</Code>
      {' · '}
      <SignOutForm />
    </>
  )
}

function SignedOut() {
  return <AppLink href="/login">sign in</AppLink>
}

export function SignedInUser({ user }) {
  if (!user) return <SignedOut />
  return <SignedIn email={user.email} />
}
