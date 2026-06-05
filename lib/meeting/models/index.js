import { Contact } from '../../db/models/Contact'
import { Meeting } from './Meeting'
import { MeetingParticipant } from './MeetingParticipant'
import { MeetingAttachment } from './MeetingAttachment'
import { MeetingNote } from './MeetingNote'
import { MeetingMergeSuggestion } from './MeetingMergeSuggestion'

const models = {
  Contact, Meeting, MeetingParticipant, MeetingAttachment, MeetingNote,
  MeetingMergeSuggestion
}

Meeting.associate(models)
MeetingParticipant.associate(models)
MeetingAttachment.associate(models)
MeetingNote.associate(models)
MeetingMergeSuggestion.associate(models)

export {
  Meeting, MeetingParticipant, MeetingAttachment, MeetingNote,
  MeetingMergeSuggestion
}
