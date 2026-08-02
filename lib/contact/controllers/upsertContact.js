import { resolveContactId } from './resolveContactId'
import { fillMissingName } from './fillMissingName'
import { addEmailIfMissing } from './addEmailIfMissing'
import { addPhoneIfMissing } from './addPhoneIfMissing'
import { dispatchContactCreated }
  from '@/lib/automation/controllers/triggers/dispatchContactCreated'

// Find a contact by email (then phone), or create one — then make sure
// the name, email and phone are on file. The name matters here and not
// only in `resolveContactId`: a contact we already knew about is the
// common case, and it is exactly the case that used to keep its blank
// name forever. Returns { id, created }.
export async function upsertContact(g) {
  const { id, created } = await resolveContactId(g)

  await fillMissingName(id, g.first_name, g.last_name)
  await addEmailIfMissing(id, g.email)
  await addPhoneIfMissing(id, g.phone)

  if (created) await dispatchContactCreated(id)

  return { id, created }
}
