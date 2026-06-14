import { resolveContactId } from './resolveContactId'
import { addEmailIfMissing } from './addEmailIfMissing'
import { addPhoneIfMissing } from './addPhoneIfMissing'

// Find a contact by email (then phone), or create one — then make sure
// the email and phone are on file. Returns { id, created }.
export async function upsertContact(organizationId, g) {
  const { id, created } = await resolveContactId(organizationId, g)

  await addEmailIfMissing(organizationId, id, g.email)
  await addPhoneIfMissing(organizationId, id, g.phone)

  return { id, created }
}
