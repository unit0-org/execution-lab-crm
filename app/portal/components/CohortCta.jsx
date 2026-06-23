import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Stack } from '@/ui/layout/Stack'
import { CtaButton } from './CtaButton'
import { WaitlistLink } from './WaitlistLink'

// A cohort's primary action plus, on register states, a quiet waitlist link.
// A closed window shows a muted note; a sold-out one shows nothing (the card
// already carries the "Sold out" tag).
export function CohortCta({ action, ...cta }) {
  if (action.state === 'full') return null

  if (action.kind === 'closed') {
    return (
      <MonoLabel tone="subtle" size={11} caps>Registration closed</MonoLabel>
    )
  }

  if (action.kind === 'waitlist') {
    return <CtaButton action={action} {...cta} />
  }

  return (
    <Stack gap="xs">
      <CtaButton action={action} {...cta} />
      <WaitlistLink href={action.waitlist} />
    </Stack>
  )
}
