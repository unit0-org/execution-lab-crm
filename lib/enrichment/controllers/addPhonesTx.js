import { ContactPhone } from '@/lib/contact/models'

// Add each phone not already on the contact; returns how many were added.
export async function addPhonesTx(contactId, phones, t) {
  let added = 0

  for (const phone of phones || []) {
    if (!phone) continue

    const [, created] = await ContactPhone.findOrCreate({
      where: { contact_id: contactId, phone },
      transaction: t
    })

    if (created) added += 1
  }

  return added
}
