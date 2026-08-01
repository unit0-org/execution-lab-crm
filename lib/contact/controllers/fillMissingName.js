import { Contact } from '@/lib/contact/models'

const blank = (value) => !value || !String(value).trim()

// Put a name on a contact that has none. A sync sees the same person many
// times and the first sighting may carry no name, so every later one must
// be able to complete the record — without this, 348 contacts (39% of the
// CRM) stayed "Unnamed contact" forever because the name was only ever
// written at creation. Never overwrites a name already on file, so a
// hand-corrected name survives the next sync.
export async function fillMissingName(id, first, last) {
  if (blank(first) && blank(last)) return

  const contact = await Contact.findByPk(id)

  if (!contact) return

  if (!blank(contact.first_name) || !blank(contact.last_name)) return

  await contact.update({ first_name: first || null, last_name: last || null })
}
