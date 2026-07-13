'use client'

import { usePathname } from 'next/navigation'
import { Shell } from '@/ui/layout/Shell'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { Toaster } from '@/ui/organisms/Toaster'
import { useSidebar } from '../hooks/useSidebar'
import { CommandBar } from './CommandBar'
import { navFor, settingsNav } from './nav'

export function AppFrame({ role, email, unread, children }) {
  const nav = useSidebar()
  const sidebar = (
    <Sidebar items={navFor(role)} settings={settingsNav()}
      currentPath={usePathname()} email={email}
      onToggleCollapse={nav.toggleCollapse} onNavigate={nav.close} />
  )

  return (
    <>
      <Shell sidebar={sidebar} open={nav.open} onClose={nav.close}>
        <CommandBar onMenu={nav.toggle} unread={unread} role={role} />
        {children}
      </Shell>
      <Toaster />
    </>
  )
}
