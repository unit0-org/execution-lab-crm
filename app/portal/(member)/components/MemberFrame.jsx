'use client'

import { usePathname } from 'next/navigation'
import { Shell } from '@/ui/layout/Shell'
import { Page } from '@/ui/layout/Page'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { Hamburger } from '@/ui/layout/Hamburger'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { useMemberSidebar } from '../hooks/useMemberSidebar'
import { memberNav, normalizePath } from './memberNav'

// The member area's full-height sidebar shell (backoffice-style frame).
export function MemberFrame({ email, children }) {
  const nav = useMemberSidebar()
  const sidebar = (
    <Sidebar items={memberNav()} settings={[]} email={email}
      currentPath={normalizePath(usePathname())}
      signOutNext={portalRoutePath('/')}
      onToggleCollapse={nav.toggleCollapse} onNavigate={nav.close} />
  )

  return (
    <Shell sidebar={sidebar} open={nav.open} onClose={nav.close}>
      <Page>
        <Hamburger onClick={nav.toggle} />
        {children}
      </Page>
    </Shell>
  )
}
