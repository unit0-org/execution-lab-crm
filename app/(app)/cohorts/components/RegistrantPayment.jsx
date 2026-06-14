import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MetaRow } from '@/ui/molecules/MetaRow'
import { buildPaymentRows } from './buildPaymentRows'

// The registrant's payment summary: status, amount, discount and dates.
export function RegistrantPayment({ registration }) {
  const rows = buildPaymentRows(registration)

  return (
    <Stack gap="sm">
      <MonoLabel caps size={11}>Payment</MonoLabel>
      {rows.map((row) => (
        <MetaRow key={row.label} label={row.label} value={row.value} />
      ))}
    </Stack>
  )
}
