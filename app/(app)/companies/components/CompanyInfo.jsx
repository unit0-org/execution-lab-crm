import { Stack } from '@/ui/layout/Stack'
import { MetaRow } from '@/ui/molecules/MetaRow'

// The company's invoicing details, one label/value row each.
export function CompanyInfo({ company }) {
  return (
    <Stack gap="xs">
      <MetaRow label="Legal name" value={company.legal_name} />
      <MetaRow label="Address" value={company.address} />
      <MetaRow label="Business number" value={company.business_number} />
      <MetaRow label="Invoice email" value={company.invoice_email} />
      <MetaRow label="Website" value={company.website} />
    </Stack>
  )
}
