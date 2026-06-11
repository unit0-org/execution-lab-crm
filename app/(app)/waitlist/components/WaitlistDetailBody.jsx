import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { WaitlistDetailFields } from './WaitlistDetailFields'

const fullName = (e) => `${e.first_name} ${e.last_name || ''}`.trim()

// The applicant's submitted waitlist answers, in form order.
export function WaitlistDetailBody({ entry }) {
  return (
    <Stack gap="md">
      <Heading level={2}>{fullName(entry)}</Heading>
      <WaitlistDetailFields entry={entry} />
    </Stack>
  )
}
