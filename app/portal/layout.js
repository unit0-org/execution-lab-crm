import { PortalShell } from '@/ui/layout/PortalShell'
import { PortalHeader } from '@/ui/organisms/PortalHeader'
import { PortalThemeToggle } from './components/PortalThemeToggle'
import { portalThemeScript } from './portalThemeScript'
import { FUNDAMENTALS_URL } from './components/portalCopy'

export { metadata } from './portalMetadata'

export default function PortalLayout({ children }) {
  return (
    <PortalShell>
      <script dangerouslySetInnerHTML={{ __html: portalThemeScript }} />
      <PortalThemeToggle />
      <PortalHeader kicker="Income First™"
        title="Fundamentals · Registration"
        infoLabel="8-week cohort · online"
        linkLabel="See the full program →"
        linkHref={FUNDAMENTALS_URL}
        logoSrc="/portal-logo.png" logoAlt="The Execution Lab" />
      {children}
    </PortalShell>
  )
}
