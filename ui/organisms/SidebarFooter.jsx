import { Stack } from '../layout/Stack'
import { Icon } from '../atoms/Icon'
import { UserEmail } from './UserEmail'
import { SignOutForm } from '../molecules/SignOutForm'
import { footerStyle } from './Sidebar.styles'

export function SidebarFooter({ email, signOutNext }) {
  return (
    <div style={footerStyle}>
      <div data-sidebar-when-expanded>
        <Stack gap="xs">
          <UserEmail value={email} />
          <SignOutForm next={signOutNext}>Log out</SignOutForm>
        </Stack>
      </div>
      <div data-sidebar-when-collapsed>
        <SignOutForm next={signOutNext}>
          <Icon name="logout" size={18} />
        </SignOutForm>
      </div>
    </div>
  )
}
