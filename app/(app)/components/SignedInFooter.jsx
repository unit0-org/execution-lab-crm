import { SidebarFooter } from '@/ui/SidebarFooter'
import { SignOutForm } from '@/ui/SignOutForm'
import { Text } from '@/ui/Text'
import { GlobalSyncStatus } from './GlobalSyncStatus'

export function SignedInFooter({ email }) {
  return (
    <SidebarFooter>
      <GlobalSyncStatus />
      <Text tone="muted" size="sm">{email}</Text>
      <SignOutForm />
    </SidebarFooter>
  )
}
