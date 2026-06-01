import { resolveContactId } from './resolveContactId'
import { addEmailIfMissing } from './addEmailIfMissing'
import { addPhoneIfMissing } from './addPhoneIfMissing'

// Find a contact by email (then phone), or create one — then make sure
// the email and phone are on file. Returns the contact id.
export async function upsertContact(g) {
  const id = await resolveContactId(g)

  await addEmailIfMissing(id, g.email)
  await addPhoneIfMissing(id, g.phone)

  return id
}
