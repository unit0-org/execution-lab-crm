import { getContactAction } from '../actions/getContact'
import { loadContactSections } from './loadContactSections'
import { ContactDetailView } from '../components/ContactDetailView'

// Server-side load for one contact and all its sections, seeded into the
// client view so it renders complete without skeletons.
export async function ContactDetailServer({ params }) {
  const { id } = await params
  const contact = await getContactAction(id)

  if (!contact) return <ContactDetailView initialContact={null} />

  const sections = await loadContactSections(id)

  return <ContactDetailView initialContact={contact} sections={sections} />
}
