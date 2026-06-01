import { Contact } from '@/lib/db/models'
import {
  findContactIdByEmail,
  findContactIdByPhone
} from './findContact'

export async function resolveContactId(g) {
  const found =
    (g.email && await findContactIdByEmail(g.email)) ||
    (g.phone && await findContactIdByPhone(g.phone))

  if (found) return found

  const c = await Contact.create({
    first_name: g.first_name,
    last_name: g.last_name
  })

  return c.id
}
