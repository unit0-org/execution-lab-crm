'use client'

import { usePathname } from 'next/navigation'
import { Shell } from '@/ui/layout/Shell'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { useSidebar } from '../hooks/useSidebar'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { NAV } from './nav'

export function AppShell({ children }) {
  const { open, toggle, close, toggleCollapse } = useSidebar()
  const email = useCurrentUser()
  const path = usePathname()
  const sidebar = (
    <Sidebar items={NAV} currentPath={path} email={email}
      onToggleCollapse={toggleCollapse} />
  )

  return (
    <Shell sidebar={sidebar} open={open} onToggle={toggle} onClose={close}>
      {children}
    </Shell>
  )
}
