import { AboutPanel } from './AboutPanel'
import { ContactPanel } from './ContactPanel'
import { ResourcesPanel } from './ResourcesPanel'

export function PersonRight({ contactId, person, resources }) {
  return (
    <>
      <AboutPanel person={person} />
      <ContactPanel
        emails={person.contact_emails}
        phones={person.contact_phones}
        socials={person.contact_socials}
      />
      <ResourcesPanel contactId={contactId} resources={resources} />
    </>
  )
}
