'use client'

import { usePathname } from 'next/navigation'
import { Shell } from '@/ui/layout/Shell'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { Toaster } from '@/ui/organisms/Toaster'
import { useSidebar } from '../hooks/useSidebar'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { navFor, settingsNav } from './nav'

export function AppFrame({ role, children }) {
  const nav = useSidebar()
  const email = useCurrentUser()
  const path = usePathname()
  const sidebar = (
    <Sidebar items={navFor()} settings={settingsNav(role)}
      currentPath={path} email={email} onToggleTheme={nav.toggleTheme}
      onToggleCollapse={nav.toggleCollapse} />
  )

  return (
    <>
      <Shell sidebar={sidebar} open={nav.open} onToggle={nav.toggle}
        onClose={nav.close}>
        {children}
      </Shell>
      <Toaster />
    </>
  )
}
