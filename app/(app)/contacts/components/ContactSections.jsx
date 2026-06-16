import { ContactAnswers } from './ContactAnswers'
import { ContactNotes } from './ContactNotes'
import { ContactRelationships } from './ContactRelationships'

// The three activity sections, each wired to its action-bar dialog.
export function ContactSections({ contactId, sections, act }) {
  return (
    <>
      <ContactAnswers contactId={contactId} reveal={act.fact}
        initial={sections.answers} />
      <ContactNotes contactId={contactId} reveal={act.note}
        initial={sections.notes} />
      <ContactRelationships contactId={contactId} reveal={act.rel}
        initial={sections.relationships} />
    </>
  )
}
