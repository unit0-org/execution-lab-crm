'use client'

import { usePathname } from 'next/navigation'
import { Shell } from '@/ui/layout/Shell'
import { Sidebar } from '@/ui/organisms/Sidebar'
import { ThemeToggle } from '@/ui/organisms/ThemeToggle'
import { Toaster } from '@/ui/organisms/Toaster'
import { useSidebar } from '../hooks/useSidebar'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { navFor, settingsNav } from './nav'

export function AppFrame({ role, children }) {
  const nav = useSidebar()
  const sidebar = (
    <Sidebar items={navFor()} settings={settingsNav(role)}
      currentPath={usePathname()} email={useCurrentUser()}
      onToggleCollapse={nav.toggleCollapse} />
  )

  return (
    <>
      <Shell sidebar={sidebar} open={nav.open} onToggle={nav.toggle}
        onClose={nav.close}>
        {children}
      </Shell>
      <ThemeToggle onClick={nav.toggleTheme} />
      <Toaster />
    </>
  )
}
