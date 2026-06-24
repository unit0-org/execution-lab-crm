import { PortalHeader } from '@/ui/organisms/PortalHeader'
import { FUNDAMENTALS_URL } from '../components/portalCopy'

// The public registration site's masthead, shown to unauthenticated
// visitors on the portal root, register, waitlist and confirmation pages.
export default function PortalPublicLayout({ children }) {
  return (
    <>
      <PortalHeader kicker="Income First™"
        title="Fundamentals · Registration"
        infoLabel="8-week cohort · online"
        linkLabel="See the full program →"
        linkHref={FUNDAMENTALS_URL}
        logoSrc="/portal-logo.png" logoAlt="The Execution Lab" />
      {children}
    </>
  )
}
