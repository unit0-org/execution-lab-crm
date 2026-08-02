import { listContactsAction } from './actions/listContacts'
import { listEventOptionsAction } from './actions/listEventOptions'
import { ContactsView } from './components/ContactsView'
import { toContactsCriteria, criteriaKey }
  from './components/contactsCriteria'

// Server-side initial load for the contacts list (perf experiment):
// fetch the first render on the server, then hand it to the client view.
// The key remounts the view with fresh server data when the criteria change.
export async function ContactsServer({ searchParams }) {
  const criteria = toContactsCriteria(await searchParams)
  const contacts = await listContactsAction(criteria)
  const eventOptions = await listEventOptionsAction()

  return (
    <ContactsView key={criteriaKey(criteria)} criteria={criteria}
      initialContacts={contacts} eventOptions={eventOptions} />
  )
}
