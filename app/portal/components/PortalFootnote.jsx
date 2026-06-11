import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { FUNDAMENTALS_URL } from './portalCopy'

// Honest-scarcity reassurance + a link back to the program page.
export function PortalFootnote() {
  return (
    <Stack gap="xs">
      <MonoLabel tone="subtle" size={11} align="center">
        No fake countdowns. Seats are real and limited to 6 per cohort.
      </MonoLabel>
      <MonoLabel tone="subtle" size={11} align="center">
        Questions? <MonoLink href={FUNDAMENTALS_URL}>
          Read the full program →
        </MonoLink>
      </MonoLabel>
    </Stack>
  )
}
