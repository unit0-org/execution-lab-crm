import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { FieldText } from '@/ui/molecules/FieldText'
import { FieldArea } from '@/ui/molecules/FieldArea'

const BUSINESS = 'What’s your business about?'
const CHALLENGE = 'Your biggest challenge right now'

// Who's joining + a little context for the team.
export function WaitlistAboutSection() {
  return (
    <Stack gap="md">
      <SectionLabel n="02">About you</SectionLabel>
      <FieldText label="Full name" name="full_name" required />
      <Columns>
        <FieldText label="Email" name="email" type="email" required />
        <FieldText label="Phone" name="phone" type="tel" hint="optional" />
      </Columns>
      <FieldArea label={BUSINESS} name="business" required rows={3} />
      <FieldArea label={CHALLENGE} name="challenge" required rows={2} />
    </Stack>
  )
}
