// The pending-registration fields for a reserved seat. Reuses the id
// generated for the preview so the link in the email that was reviewed is
// the row we create, and stamps reserved_at — the start of the hold, and
// the one thing that tells a reserved seat from a self-serve one.
export function reservationData(draft) {
  return {
    id: draft.registrationId,
    contact_id: draft.contactId || null,
    first_name: draft.first_name,
    last_name: draft.last_name,
    email: draft.to,
    reserved_at: new Date()
  }
}
