import { Stack } from '../layout/Stack'
import { Icon } from '../atoms/Icon'
import { UserEmail } from './UserEmail'
import { SignOutForm } from '../molecules/SignOutForm'
import { footerStyle } from './Sidebar.styles'

export function SidebarFooter({ email, collapsed }) {
  if (collapsed) {
    return (
      <div style={footerStyle}>
        <SignOutForm><Icon name="logout" size={18} /></SignOutForm>
      </div>
    )
  }

  return (
    <div style={footerStyle}>
      <Stack gap="xs">
        <UserEmail value={email} />
        <SignOutForm>Log out</SignOutForm>
      </Stack>
    </div>
  )
}
