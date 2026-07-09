'use client'

import { ThemeToggle } from '@/ui/organisms/ThemeToggle'
import { togglePortalTheme } from '../hooks/portalThemeControls'

// The portal's floating top-right light/dark switch.
export function PortalThemeToggle() {
  return <ThemeToggle onClick={togglePortalTheme} />
}
