import { listContactsAction } from './actions/listContacts'
import { ContactsView } from './components/ContactsView'

// Server-side initial load for the contacts list (perf experiment):
// fetch the first render on the server, then hand it to the client view.
// The key remounts the view with fresh server data when the filter changes.
export async function ContactsServer({ searchParams }) {
  const { filter } = await searchParams
  const active = filter || null
  const viewKey = filter || 'all'
  const contacts = await listContactsAction(filter)

  return (
    <ContactsView key={viewKey} filter={active}
      initialContacts={contacts} />
  )
}
