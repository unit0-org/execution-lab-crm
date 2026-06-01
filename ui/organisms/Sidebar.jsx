import { Nav } from './Nav'
import { UserEmail } from './UserEmail'
import { SignOutForm } from '../molecules/SignOutForm'
import { Stack } from '../layout/Stack'
import { sidebarStyle, footerStyle } from './Sidebar.styles'

export function Sidebar({ items, currentPath, email }) {
  return (
    <div style={sidebarStyle}>
      <Nav items={items} currentPath={currentPath} />
      <div style={footerStyle}>
        <Stack gap="xs">
          <UserEmail value={email} />
          <SignOutForm>Log out</SignOutForm>
        </Stack>
      </div>
    </div>
  )
}
