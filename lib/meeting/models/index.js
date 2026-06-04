import { Contact } from '../../db/models/Contact'
import { Meeting } from './Meeting'
import { MeetingParticipant } from './MeetingParticipant'
import { MeetingAttachment } from './MeetingAttachment'
import { MeetingNote } from './MeetingNote'

const models = {
  Contact, Meeting, MeetingParticipant, MeetingAttachment, MeetingNote
}

Meeting.associate(models)
MeetingParticipant.associate(models)
MeetingAttachment.associate(models)
MeetingNote.associate(models)

export {
  Meeting, MeetingParticipant, MeetingAttachment, MeetingNote
}
