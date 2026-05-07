import { SidebarShell } from '@/ui/SidebarShell'
import { SidebarGroup } from '@/ui/SidebarGroup'
import { Brand } from '@/ui/Brand'
import { Nav } from './Nav'
import { AccountChips } from './AccountChips'
import { SignedInFooter } from './SignedInFooter'

export function Sidebar({ userEmail }) {
  return (
    <SidebarShell>
      <Brand />
      <Nav />
      <SidebarGroup label="Connected accounts">
        <AccountChips />
      </SidebarGroup>
      <SignedInFooter email={userEmail} />
    </SidebarShell>
  )
}
