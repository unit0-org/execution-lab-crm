import { requireStaff } from './requireStaff'
import { unreadCount } from '@/lib/notification/controllers/unreadCount'
import { countAttentionItems }
  from '@/lib/contact-merge-and-fix/controllers/countAttentionItems'
import { AppShell } from './components/AppShell'

// Route-root server loader: require a STAFF membership (closing the shared-
// cookie hole — see requireStaff), then fetch the signed-in email, unread
// count and Merge & Fix count so the sidebar, its badges and the bell are
// right on first paint — no layout shift.
export async function AppShellServer({ children }) {
  const user = await requireStaff()
  const [unread, mergeFixCount] = await Promise.all([
    unreadCount(user.id), countAttentionItems()
  ])

  return (
    <AppShell email={user.email} unread={unread} mergeFixCount={mergeFixCount}>
      {children}
    </AppShell>
  )
}
