import { addEmailsTx } from './addEmailsTx'
import { addPhonesTx } from './addPhonesTx'
import { addFactsTx } from './addFactsTx'
import { addContactNotesTx } from './addContactNotesTx'
import { fillLinkedinTx } from './fillLinkedinTx'

// Apply a contact's additive data (emails, phones, linkedin, facts, notes)
// and return per-kind counts of newly written rows.
export async function applyContactAdds(contactId, add, t, meta) {
  const a = add || {}

  await fillLinkedinTx(contactId, a.linkedinUrl, t)

  return {
    emails: await addEmailsTx(contactId, a.emails, t),
    phones: await addPhonesTx(contactId, a.phones, t),
    facts: await addFactsTx(contactId, a.facts, t, meta),
    contactNotes: await addContactNotesTx(contactId, a.notes, t, meta)
  }
}
