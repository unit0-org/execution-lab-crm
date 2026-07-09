import { PortalThemeToggle } from './components/PortalThemeToggle'
import { PortalAutoTheme } from './components/PortalAutoTheme'
import { portalThemeScript } from '@/lib/portal/portalThemeScript'

export { metadata } from '@/lib/portal/portalMetadata'

// Shared portal theme for every surface. Each route group supplies its own
// frame: public/sign-in/payment use PortalShell; the member area a sidebar.
export default function PortalLayout({ children }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: portalThemeScript }} />
      <PortalAutoTheme />
      <PortalThemeToggle />
      {children}
    </>
  )
}
