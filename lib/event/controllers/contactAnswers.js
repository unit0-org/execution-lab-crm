import { Op } from 'sequelize'
import {
  ParticipantAnswer,
  EventParticipant,
  OwnEvent,
  RegistrationQuestion
} from '../models'
import { KNOWN_COLUMNS } from '../../luma/controllers/knownColumns'
import { toAnswerNugget } from './toAnswerNugget'
import { dedupeNuggets } from './dedupeNuggets'

// Skip questions that are really leaked Luma columns (e.g. checked_in_at).
const NOT_A_QUESTION = { text: { [Op.notIn]: [...KNOWN_COLUMNS] } }

// Registration Q&A a contact provided, newest event first.
export async function contactAnswers(contactId) {
  const rows = await ParticipantAnswer.findAll({
    include: [
      {
        model: EventParticipant,
        where: { contact_id: contactId },
        include: [OwnEvent]
      },
      { model: RegistrationQuestion, where: NOT_A_QUESTION }
    ],
    order: [[EventParticipant, OwnEvent, 'date', 'DESC']]
  })

  return dedupeNuggets(rows.map((row) => toAnswerNugget(row.toJSON())))
}
