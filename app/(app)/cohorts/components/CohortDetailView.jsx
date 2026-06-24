import { Stack } from '@/ui/layout/Stack'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { portalUrl } from '@/lib/portal/portalUrl'
import { CohortDetailHeader } from './CohortDetailHeader'
import { RegistrationsTable } from './RegistrationsTable'
import { CohortResources } from './CohortResources'

const registerHref = (slug) => portalUrl(`/register/${slug}`)

// A cohort's header (with an edit action), a link to its public
// registration page, everyone registered, and its resource folders.
export function CohortDetailView({ cohort, registrations, folders }) {
  return (
    <Stack gap="lg">
      <CohortDetailHeader cohort={cohort} />
      <ButtonLink href={registerHref(cohort.slug)} target="_blank">
        Registration page
      </ButtonLink>
      <RegistrationsTable registrations={registrations} />
      <CohortResources cohortId={cohort.id} initial={folders} />
    </Stack>
  )
}
