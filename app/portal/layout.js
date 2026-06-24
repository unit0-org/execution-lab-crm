import { PortalShell } from '@/ui/layout/PortalShell'
import { PortalThemeToggle } from './components/PortalThemeToggle'
import { portalThemeScript } from '@/lib/portal/portalThemeScript'

export { metadata } from '@/lib/portal/portalMetadata'

// Shared portal frame (shell + theme) for every portal surface: the public
// registration site, the sign-in page, and the authenticated member area.
// Each adds its own masthead in its route-group layout.
export default function PortalLayout({ children }) {
  return (
    <PortalShell>
      <script dangerouslySetInnerHTML={{ __html: portalThemeScript }} />
      <PortalThemeToggle />
      {children}
    </PortalShell>
  )
}
