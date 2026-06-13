import { contactAnswersAction } from '../actions/contactAnswers'
import { listNotesAction } from '../actions/listNotes'
import { listRelationshipsAction } from '../actions/listRelationships'
import { contactActivityAction } from '../actions/contactActivity'

// Loads every contact-detail section on the server so the page renders
// seeded, with no client fetch-on-mount and no loading skeletons.
export async function loadContactSections(id) {
  const [answers, notes, relationships, timeline] = await Promise.all([
    contactAnswersAction(id),
    listNotesAction(id),
    listRelationshipsAction(id),
    contactActivityAction(id)
  ])

  return { answers, notes, relationships, timeline }
}
