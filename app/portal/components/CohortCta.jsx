import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { ctaTone } from './ctaTone'

// A cohort's primary action: a tone-matched link, or a muted note once
// the registration window has closed.
export function CohortCta({ action, block, size }) {
  if (action.kind === 'closed') {
    return (
      <MonoLabel tone="subtle" size={11} caps>Registration closed</MonoLabel>
    )
  }

  return (
    <ButtonLink href={action.href} tone={ctaTone(action.state)}
      block={block} size={size}>{action.cta}</ButtonLink>
  )
}
