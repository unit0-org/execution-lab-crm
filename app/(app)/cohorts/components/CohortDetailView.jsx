'use client'

import { Stack } from '@/ui/layout/Stack'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { portalUrl } from '@/lib/portal/portalUrl'
import { useCohortDetailEdit } from '../hooks/useCohortDetailEdit'
import { CohortDetailHeader } from './CohortDetailHeader'
import { CohortFormModal } from './CohortFormModal'
import { RegistrationsTable } from './RegistrationsTable'

const registerHref = (slug) => portalUrl(`/register/${slug}`)

// A cohort's header (with an edit action), a link to its public
// registration page, and everyone registered for it.
export function CohortDetailView({ cohort, registrations }) {
  const edit = useCohortDetailEdit()

  return (
    <Stack gap="lg">
      <CohortDetailHeader cohort={cohort} onEdit={edit.openEdit} />
      <ButtonLink href={registerHref(cohort.slug)} target="_blank">
        Registration page
      </ButtonLink>
      <RegistrationsTable registrations={registrations} />
      <CohortFormModal open={edit.open} onClose={edit.close}
        cohort={edit.editing} onSaved={edit.onSaved} />
    </Stack>
  )
}
