import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Stack } from '@/ui/layout/Stack'
import { CtaButton } from './CtaButton'
import { WaitlistLink } from './WaitlistLink'

// A cohort's primary action plus, on register states, a quiet waitlist link.
// A closed window shows a muted note instead of a button.
export function CohortCta({ action, block, size }) {
  if (action.kind === 'closed') {
    return (
      <MonoLabel tone="subtle" size={11} caps>Registration closed</MonoLabel>
    )
  }

  if (action.kind === 'waitlist') {
    return <CtaButton action={action} block={block} size={size} />
  }

  return (
    <Stack gap="xs">
      <CtaButton action={action} block={block} size={size} />
      <WaitlistLink href={action.waitlist} />
    </Stack>
  )
}
