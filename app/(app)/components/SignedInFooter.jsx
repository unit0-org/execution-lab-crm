import { SidebarFooter } from '@/ui/SidebarFooter'
import { SignOutForm } from '@/ui/SignOutForm'
import { Text } from '@/ui/Text'

export function SignedInFooter({ email }) {
  return (
    <SidebarFooter>
      <Text tone="muted" size="sm">{email}</Text>
      <SignOutForm />
    </SidebarFooter>
  )
}
