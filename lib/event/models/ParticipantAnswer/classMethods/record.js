// Save one answer, refreshing it if the participant already answered.
export async function record(participantId, questionId, answer) {
  const [row, created] = await this.findOrCreate({
    where: {
      event_participant_id: participantId,
      registration_question_id: questionId
    },
    defaults: { answer }
  })

  if (!created) await row.update({ answer })
}
