const isYes = (value) => value === 'yes'

// Collect the invoicing-settings form fields into a plain object.
export function formToSetting(formData) {
  return {
    auto_create: isYes(formData.get('auto_create')),
    auto_send: isYes(formData.get('auto_send')),
    drive_folder_id: formData.get('drive_folder_id') || null,
    from_name: formData.get('from_name') || null,
    from_email: formData.get('from_email') || null,
    number_prefix: formData.get('number_prefix') || 'INV-'
  }
}
