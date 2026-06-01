import { resolveContactId } from './resolveContactId'
import { ensureEmail } from './ensureEmail'
import { ensurePhone } from './phones'

// Find a contact by email (then phone), or create one — then make sure
// the email and phone are on file. Returns the contact id.
export async function upsertContact(g) {
  const id = await resolveContactId(g)

  await ensureEmail(id, g.email)
  await ensurePhone(id, g.phone)

  return id
}
