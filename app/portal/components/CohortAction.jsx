import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { cohortActionProps } from './cohortActionProps'

// Primary CTA for a cohort: Register, or Join Waitlist when full.
export function CohortAction({ id, spotsLeft }) {
  const { label, href } = cohortActionProps(id, spotsLeft)

  return <ButtonLink href={href} tone="primary">{label}</ButtonLink>
}
