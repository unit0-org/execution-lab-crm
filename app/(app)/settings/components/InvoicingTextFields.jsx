import { TextField } from '@/ui/atoms/TextField'

export function InvoicingTextFields({ setting }) {
  return (
    <>
      <TextField name="from_name" placeholder="Sender name"
        defaultValue={setting.from_name} />
      <TextField name="from_email" placeholder="Sender email"
        defaultValue={setting.from_email} />
      <TextField name="drive_folder_id" placeholder="Google Drive folder ID"
        defaultValue={setting.drive_folder_id} />
      <TextField name="number_prefix" placeholder="Invoice number prefix"
        defaultValue={setting.number_prefix} />
    </>
  )
}
