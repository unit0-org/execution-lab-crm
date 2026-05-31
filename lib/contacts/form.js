export function readContactForm(formData) {
  return {
    first: formData.get('first_name') || null,
    last: formData.get('last_name') || null,
    emails: formData.getAll('email')
  }
}
