import { MeetingParticipant } from '../models'

export async function removeParticipant(id) {
  await MeetingParticipant.destroy({ where: { id } })

  return { ok: true }
}
