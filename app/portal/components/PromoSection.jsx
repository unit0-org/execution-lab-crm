import { Stack } from '@/ui/layout/Stack'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { FieldText } from '@/ui/molecules/FieldText'

// Optional discount code. A member rate (e.g. a partner's) replaces the
// default 20% reward — the two never stack. Prefilled from a ?code= link.
export function PromoSection({ defaultValue }) {
  return (
    <Stack gap="md">
      <SectionLabel n="04">Discount</SectionLabel>
      <FieldText label="Have a code?" name="promo_code"
        defaultValue={defaultValue}
        hint="optional — replaces the 20% reward" />
    </Stack>
  )
}
