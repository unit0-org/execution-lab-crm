import { registerCreateMeeting } from './createMeeting'
import { registerListMeetings } from './listMeetings'
import { registerGetMeeting } from './getMeeting'
import { registerUpdateMeeting } from './updateMeeting'
import { registerAddParticipant } from './addParticipant'
import { registerRemoveParticipant } from './removeParticipant'
import { registerAddMeetingNote } from './addMeetingNote'
import { registerRemoveMeetingNote } from './removeMeetingNote'
import { registerMergeMeetings } from './mergeMeetings'

// Meeting CRUD, participant, note and merge tools.
export function registerMeetingTools(server) {
  registerCreateMeeting(server)
  registerListMeetings(server)
  registerGetMeeting(server)
  registerUpdateMeeting(server)
  registerAddParticipant(server)
  registerRemoveParticipant(server)
  registerAddMeetingNote(server)
  registerRemoveMeetingNote(server)
  registerMergeMeetings(server)
}
