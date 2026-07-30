import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { AttributionWindowField } from './AttributionWindowField'

const URN_PLACEHOLDER = 'urn:lla:llaPartnerConversion:1234567'

export function LinkedinConversionFields({ settings }) {
  const urn = settings.conversion?.conversion_urn || ''

  return (
    <Stack gap="sm">
      <TextField label="Conversion rule URN" name="conversionUrn"
        defaultValue={urn} placeholder={URN_PLACEHOLDER} />
      <AttributionWindowField attributionDays={settings.attributionDays} />
    </Stack>
  )
}
