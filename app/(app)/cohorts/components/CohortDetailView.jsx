import { Stack } from '@/ui/layout/Stack'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { portalUrl } from '@/lib/portal/portalUrl'
import { CohortDetailHeader } from './CohortDetailHeader'
import { RegistrationsTable } from './RegistrationsTable'

const registerHref = (slug) => portalUrl(`/register/${slug}`)

// A cohort's header (with an edit action), a link to its public
// registration page, and everyone registered for it.
export function CohortDetailView({ cohort, registrations }) {
  return (
    <Stack gap="lg">
      <CohortDetailHeader cohort={cohort} />
      <ButtonLink href={registerHref(cohort.slug)} target="_blank">
        Registration page
      </ButtonLink>
      <RegistrationsTable registrations={registrations} />
    </Stack>
  )
}
