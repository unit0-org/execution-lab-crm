import { PortalShell } from '@/ui/layout/PortalShell'
import { PortalHeader } from '@/ui/organisms/PortalHeader'
import { MemberSignInLink } from './components/MemberSignInLink'
import { FUNDAMENTALS_URL } from '../components/portalCopy'

// The public registration site's masthead, shown to unauthenticated
// visitors on the portal root, register, waitlist and confirmation pages.
export default function PortalPublicLayout({ children }) {
  return (
    <PortalShell>
      <PortalHeader kicker="Income First™"
        title="Fundamentals · Registration"
        infoLabel="8-week cohort · online"
        linkLabel="See the full program →"
        linkHref={FUNDAMENTALS_URL}
        logoSrc="/portal-logo.png" logoAlt="The Execution Lab"
        aside={<MemberSignInLink />} />
      {children}
    </PortalShell>
  )
}
