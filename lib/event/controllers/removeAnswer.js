import { ParticipantAnswer } from '@/lib/event/models'

// Delete one registration answer — the canonical record of what the
// participant submitted for that question. Permanent.
export async function removeAnswer(id) {
  await ParticipantAnswer.destroy({ where: { id } })

  return { ok: true }
}
