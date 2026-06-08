import { getContactAction } from '../actions/getContact'
import { ContactDetailView } from '../components/ContactDetailView'

// Server-side load for one contact, seeded into the client view.
export async function ContactDetailServer({ params }) {
  const { id } = await params
  const contact = await getContactAction(id)

  return <ContactDetailView initialContact={contact} />
}
