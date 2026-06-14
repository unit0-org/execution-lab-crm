import { resolveContactId } from './resolveContactId'
import { addEmailIfMissing } from './addEmailIfMissing'
import { addPhoneIfMissing } from './addPhoneIfMissing'

// Find a contact by email (then phone), or create one — then make sure
// the email and phone are on file. Returns { id, created }.
export async function upsertContact(g) {
  const { id, created } = await resolveContactId(g)

  await addEmailIfMissing(id, g.email)
  await addPhoneIfMissing(id, g.phone)

  return { id, created }
}
