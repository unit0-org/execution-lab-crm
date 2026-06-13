import { currentUser } from '@/lib/auth/currentUser'
import { AppShell } from './components/AppShell'

// Route-root server loader: fetch the signed-in email on the server so the
// sidebar shows it on the first paint — no skeleton, no layout shift.
export async function AppShellServer({ children }) {
  const user = await currentUser()
  const email = user?.email || null

  return <AppShell email={email}>{children}</AppShell>
}
