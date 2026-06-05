import { TextField } from '@/ui/atoms/TextField'

export function CreateInvoiceFields() {
  return (
    <>
      <TextField name="bill_to_name" placeholder="Client name" />
      <TextField name="bill_to_email" type="email"
        placeholder="Client email" />
      <TextField name="description" placeholder="Description" />
      <TextField name="quantity" type="number" defaultValue="1"
        placeholder="Qty" />
      <TextField name="unit_amount" placeholder="Unit amount (CAD)" />
      <TextField name="notes" placeholder="Notes" />
    </>
  )
}
