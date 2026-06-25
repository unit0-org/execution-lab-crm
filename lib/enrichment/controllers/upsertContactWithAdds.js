import { resolveEnrichmentContact } from './resolveEnrichmentContact'
import { applyContactAdds } from './applyContactAdds'

// Resolve (or create) the contact for an identity, then apply its adds —
// always storing the identity email itself (so a freshly-created contact
// keeps the address it was matched on). Returns { id, created, matchedBy,
// applied }.
export async function upsertContactWithAdds(identity, add, t, factDate) {
  const contact = await resolveEnrichmentContact(identity, t)
  const emails = [identity.email, ...((add && add.emails) || [])]
  const applied =
    await applyContactAdds(contact.id, { ...add, emails }, t, factDate)

  return { ...contact, applied }
}
