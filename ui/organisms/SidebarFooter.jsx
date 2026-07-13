import { Stack } from '../layout/Stack'
import { Icon } from '../atoms/Icon'
import { UserEmail } from './UserEmail'
import { SignOutForm } from '../molecules/SignOutForm'
import { footerStyle } from './Sidebar.styles'

/**
 * Sidebar footer: the signed-in `email` over a sign-out control (an icon
 * when collapsed). `signOutNext` = post-logout landing path.
 */
export function SidebarFooter({ email, signOutNext }) {
  return (
    <div style={footerStyle}>
      <div data-sidebar-when-expanded>
        <Stack gap="xs">
          <UserEmail value={email} href="/preferences" />
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
