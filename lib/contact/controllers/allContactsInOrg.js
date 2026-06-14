import { Contact } from '@/lib/contact/models'

// True when every given contact id exists.
export async function allContactsInOrg(ids) {
  const count = await Contact.count({
    where: { id: ids }
  })

  return count === new Set(ids).size
}
