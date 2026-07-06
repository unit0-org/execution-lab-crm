'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { memberNav, normalizePath } from './memberNav'

// The member area's navigation sidebar.
export function MemberSidebar({ email, nav }) {
  return (
    <Sidebar items={memberNav()} settings={[]} email={email}
      currentPath={normalizePath(usePathname())}
      signOutNext={portalRoutePath('/')}
      onToggleCollapse={nav.toggleCollapse} onNavigate={nav.close} />
  )
}
