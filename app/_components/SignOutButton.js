import { linkButton } from '@/app/_styles/page'

export function SignOutButton() {
  return (
    <form action="/auth/signout" method="post" style={{ display: 'inline' }}>
      <button type="submit" style={linkButton}>sign out</button>
    </form>
  )
}
