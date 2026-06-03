import { Stack } from '../layout/Stack'
import { Icon } from '../atoms/Icon'
import { UserEmail } from './UserEmail'
import { SignOutForm } from '../molecules/SignOutForm'
import { footerStyle } from './Sidebar.styles'

export function SidebarFooter({ email }) {
  return (
    <div style={footerStyle}>
      <div data-sidebar-when-expanded>
        <Stack gap="xs">
          <UserEmail value={email} />
          <SignOutForm>Log out</SignOutForm>
        </Stack>
      </div>
      <div data-sidebar-when-collapsed>
        <SignOutForm><Icon name="logout" size={18} /></SignOutForm>
      </div>
    </div>
  )
}
