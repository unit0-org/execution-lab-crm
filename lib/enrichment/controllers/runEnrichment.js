import { resolveParticipants } from './resolveParticipants'
import { upsertMeetingBySource } from './upsertMeetingBySource'
import { attachParticipants } from './attachParticipants'
import { applyMeetingNotes } from './applyMeetingNotes'
import { applyRelationships } from './applyRelationships'
import { attachIfPresent } from './attachIfPresent'
import { assembleResult } from './assembleResult'

// The whole enrichment inside one transaction `t`: resolve contacts, upsert
// the meeting, attach participants, fold in notes/relationships/transcript.
export async function runEnrichment(input, t) {
  const people = await resolveParticipants(input.participants, t)
  const meeting = await upsertMeetingBySource(input.meeting, people.ids, t)

  await attachParticipants(meeting.id, input.participants, people.refToId, t)

  const meetingNotes =
    await applyMeetingNotes(meeting.id, input.meetingNotes, t)
  const relationships =
    await applyRelationships(input.relationships, people.refToId, t)
  const transcript = await attachIfPresent(meeting.id, input.transcript, t)

  return assembleResult(meeting, people, { meetingNotes, relationships },
    transcript)
}
