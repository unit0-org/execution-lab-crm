// The pending-registration fields for an accepted waitlist entry. Reuses
// the pre-generated id so the preview's pay link matches what we create.
export function registrationData(draft, entry) {
  return {
    id: draft.registrationId,
    contact_id: entry.contact_id,
    first_name: entry.first_name,
    last_name: entry.last_name,
    email: draft.to,
    phone: entry.phone
  }
}
