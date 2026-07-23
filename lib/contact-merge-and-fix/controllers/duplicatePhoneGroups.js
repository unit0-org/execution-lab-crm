import { ContactPhone } from '@/lib/contact/models'
import { normalizePhone } from '../normalizePhone'
import { groupIds } from './groupIds'

// Contact-id groups that share a normalized phone (more than one contact).
export async function duplicatePhoneGroups() {
  const rows = await ContactPhone.findAll({
    attributes: ['contact_id', 'phone']
  })
  const keyed = rows.map((row) => ({
    id: row.contact_id, key: normalizePhone(row.phone)
  }))

  return groupIds(keyed)
}
