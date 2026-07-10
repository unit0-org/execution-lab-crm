import { ParticipantAnswer } from '@/lib/event/models'

// Edit just the answer text of a registration answer. The shared
// question is owned by the event and is never touched here.
export async function updateAnswer(id, value) {
  if (!value) return { error: 'A value is required' }

  const row = await ParticipantAnswer.findByPk(id)

  if (!row) return { ok: true }

  await row.update({ answer: value })

  return { ok: true }
}
