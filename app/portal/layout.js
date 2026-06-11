import { PortalShell } from '@/ui/layout/PortalShell'
import { PortalHeader } from '@/ui/organisms/PortalHeader'
import { forceDarkScript } from './forceDarkScript'
import { FUNDAMENTALS_URL } from './components/portalCopy'

export const metadata = {
  title: 'The Execution Lab — Fundamentals Registration'
}

export default function PortalLayout({ children }) {
  return (
    <PortalShell>
      <script dangerouslySetInnerHTML={{ __html: forceDarkScript }} />
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
