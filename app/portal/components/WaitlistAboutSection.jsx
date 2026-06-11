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
      <FieldText label="Full name" name="full_name" required
        placeholder="Jordan Avery" />
      <Columns>
        <FieldText label="Email" name="email" type="email" required
          placeholder="you@business.com" />
        <FieldText label="Phone" name="phone" type="tel" hint="optional"
          placeholder="+1 ___ ___ ____" />
      </Columns>
      <FieldArea label={BUSINESS} name="business" required rows={3}
        placeholder="What you sell (or want to build) and who it’s for." />
      <FieldArea label={CHALLENGE} name="challenge" required rows={2}
        placeholder="The one thing most in your way today." />
    </Stack>
  )
}
