// Collect the public waitlist form into a plain object. Only first name
// and email are required (last name is optional).
export function formToWaitlist(formData) {
  return {
    first_name: (formData.get('first_name') || '').trim(),
    last_name: (formData.get('last_name') || '').trim(),
    email: (formData.get('email') || '').trim()
  }
}
