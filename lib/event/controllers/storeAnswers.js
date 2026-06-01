import { RegistrationQuestion, ParticipantAnswer } from '../models'

// Save a participant's registration answers, creating each question on
// the event as needed. Idempotent.
export async function storeAnswers(eventId, participantId, answers) {
  for (const { question, answer } of answers) {
    const id = await RegistrationQuestion.upsertId(eventId, question)
    await ParticipantAnswer.record(participantId, id, answer)
  }
}
