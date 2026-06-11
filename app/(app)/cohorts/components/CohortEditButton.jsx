'use client'

import { useRouter } from 'next/navigation'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// Opens the cohort's edit page (the form is too long for a modal).
export function CohortEditButton({ cohort }) {
  const router = useRouter()
  const openEditor = () => router.push(`/cohorts/${cohort.id}/edit`)

  return (
    <IconButton label="Edit cohort" onClick={openEditor}>
      <Icon name="pencil" size={16} />
    </IconButton>
  )
}
