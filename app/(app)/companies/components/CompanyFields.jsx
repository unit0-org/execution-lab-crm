import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'

export function CompanyFields({ company }) {
  const c = company || {}

  return (
    <Stack gap="sm">
      <TextField name="name" placeholder="Name" defaultValue={c.name} />
      <TextField name="legal_name" placeholder="Legal name"
        defaultValue={c.legal_name} />
      <TextField name="address" placeholder="Address"
        defaultValue={c.address} />
      <TextField name="business_number" placeholder="Business number"
        defaultValue={c.business_number} />
      <TextField name="invoice_email" placeholder="Invoice email"
        defaultValue={c.invoice_email} />
      <TextField name="website" placeholder="Website"
        defaultValue={c.website} />
    </Stack>
  )
}
