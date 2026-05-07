import { sidebarStyle } from './Sidebar.styles'
import { Brand } from './Brand'
import { Nav } from './Nav'
import { SidebarSection } from './SidebarSection'
import { AccountChips } from './AccountChips'
import { SignedInFooter } from './SignedInFooter'

export function Sidebar({ userEmail }) {
  return (
    <aside style={sidebarStyle}>
      <Brand />
      <Nav />
      <SidebarSection label="Connected accounts">
        <AccountChips />
      </SidebarSection>
      <SignedInFooter email={userEmail} />
    </aside>
  )
}
