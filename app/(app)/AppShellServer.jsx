import { requireStaff } from './requireStaff'
import { unreadCount } from '@/lib/notification/controllers/unreadCount'
import { AppShell } from './components/AppShell'

// Route-root server loader: require a STAFF membership (closing the shared-
// cookie hole — see requireStaff), then fetch the signed-in email + unread
// count so the sidebar and bell are right on first paint — no layout shift.
export async function AppShellServer({ children }) {
  const user = await requireStaff()
  const unread = await unreadCount(user.id)

  return <AppShell email={user.email} unread={unread}>{children}</AppShell>
}
