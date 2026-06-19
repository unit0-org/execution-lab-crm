import { currentUser } from '@/lib/auth/currentUser'
import { unreadCount } from '@/lib/notification/controllers/unreadCount'
import { AppShell } from './components/AppShell'

// Route-root server loader: fetch the signed-in email + unread count on the
// server so the sidebar and bell are right on first paint — no layout shift.
export async function AppShellServer({ children }) {
  const user = await currentUser()
  const email = user?.email || null
  const unread = user ? await unreadCount(user.id) : 0

  return <AppShell email={email} unread={unread}>{children}</AppShell>
}
