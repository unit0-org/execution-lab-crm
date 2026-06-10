import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { Text } from '@/ui/atoms/Text'
import { cohortActionProps } from './cohortActionProps'

// Primary CTA for a cohort: register, join the waitlist, or a muted
// closed notice once the registration window has passed.
export function CohortAction({ card }) {
  const action = cohortActionProps(card)

  if (action.kind === 'closed') {
    return <Text tone="muted">{action.label}</Text>
  }

  return (
    <ButtonLink href={action.href} tone="primary">{action.label}</ButtonLink>
  )
}
