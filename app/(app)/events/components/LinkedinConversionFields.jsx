import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'

const URN_PLACEHOLDER = 'urn:lla:llaPartnerConversion:1234567'
const VALUE_PLACEHOLDER = 'Blank reports what each registrant paid'

function dollarsValue(cents) {
  if (cents === null || cents === undefined) return ''

  return (cents / 100).toFixed(2)
}

export function LinkedinConversionFields({ conversion }) {
  const urn = conversion?.conversion_urn || ''
  const value = dollarsValue(conversion?.conversion_value_cents)

  return (
    <Stack gap="sm">
      <TextField label="Conversion rule URN" name="conversionUrn"
        defaultValue={urn} placeholder={URN_PLACEHOLDER} />
      <TextField label="Conversion value (CAD)" name="conversionValue"
        defaultValue={value} placeholder={VALUE_PLACEHOLDER} />
    </Stack>
  )
}
