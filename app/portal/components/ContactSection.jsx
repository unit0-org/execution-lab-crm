import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { FieldText } from '@/ui/molecules/FieldText'

// Contact details: email, name (+ preferred), phone, LinkedIn, website.
export function ContactSection({ defaults = {} }) {
  return (
    <Stack gap="md">
      <SectionLabel n="01">Contact</SectionLabel>
      <FieldText label="Email" name="email" type="email" required autoFocus
        defaultValue={defaults.email} />
      <Columns>
        <FieldText label="Full name" name="full_name" required
          defaultValue={defaults.full_name} />
        <FieldText label="Preferred name" name="preferred_name"
          hint="optional" />
      </Columns>
      <Columns>
        <FieldText label="Phone" name="phone" type="tel" hint="optional" />
        <FieldText label="LinkedIn" name="linkedin" required />
      </Columns>
      <FieldText label="Website" name="website" hint="optional" />
    </Stack>
  )
}
