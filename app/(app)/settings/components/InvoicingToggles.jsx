import { Select } from '@/ui/atoms/Select'

const YES_NO = ['no', 'yes']
const yn = (value) => (value ? 'yes' : 'no')

export function InvoicingToggles({ setting }) {
  return (
    <>
      <Select label="Auto-create on payment" name="auto_create"
        options={YES_NO} defaultValue={yn(setting.auto_create)} />
      <Select label="Auto-send invoices" name="auto_send"
        options={YES_NO} defaultValue={yn(setting.auto_send)} />
    </>
  )
}
