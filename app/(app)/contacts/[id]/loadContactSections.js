import { contactAnswersAction } from '../actions/contactAnswers'
import { listNotesAction } from '../actions/listNotes'
import { listRelationshipsAction } from '../actions/listRelationships'
import { listTasksAction } from '../actions/listTasks'
import { listContactFilesAction } from '../actions/listContactFiles'
import { contactActivityAction } from '../actions/contactActivity'
import { contactSpendAction } from '../actions/contactSpend'
import { contactGoogleLinkAction } from '../actions/contactGoogleLink'
import { contactPortalMemberAction } from '../actions/contactPortalMember'
import { contactCompaniesAction } from '../actions/contactCompanies'

// Loads every contact-detail section on the server, seeded (no skeletons).
export async function loadContactSections(id) {
  const [answers, notes, relationships, tasks, files, timeline, spend,
    googleLink, portalMember, companies] = await Promise.all([
      contactAnswersAction(id), listNotesAction(id),
      listRelationshipsAction(id), listTasksAction(id),
      listContactFilesAction(id), contactActivityAction(id),
      contactSpendAction(id), contactGoogleLinkAction(id),
      contactPortalMemberAction(id), contactCompaniesAction(id)
    ])

  return {
    answers, notes, relationships, tasks, files, timeline, spend,
    googleLink, portalMember, companies
  }
}
