import { ParticipantAnswer } from '@/lib/event/models'

// Move a duplicate's answers onto the survivor, keeping the survivor's
// own answer whenever both answered the same question.
export async function mergeAnswers(survivorId, dupId, t) {
  const own = await ParticipantAnswer.findAll({
    where: { event_participant_id: survivorId }, transaction: t
  })
  const answered = own.map((a) => a.registration_question_id)

  await ParticipantAnswer.destroy({
    where: {
      event_participant_id: dupId,
      registration_question_id: answered
    },
    transaction: t
  })

  await ParticipantAnswer.update(
    { event_participant_id: survivorId },
    { where: { event_participant_id: dupId }, transaction: t }
  )
}
