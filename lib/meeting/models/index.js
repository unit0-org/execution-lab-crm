import { Contact } from '@/lib/contact/models/Contact'
import { Meeting } from './Meeting'
import { MeetingParticipant } from './MeetingParticipant'
import { MeetingAttachment } from './MeetingAttachment'
import { MeetingNote } from './MeetingNote'
import { MeetingTranscript } from './MeetingTranscript'
import { MeetingMergeSuggestion } from './MeetingMergeSuggestion'

const models = {
  Contact, Meeting, MeetingParticipant, MeetingAttachment, MeetingNote,
  MeetingTranscript, MeetingMergeSuggestion
}

Meeting.associate(models)
MeetingParticipant.associate(models)
MeetingAttachment.associate(models)
MeetingNote.associate(models)
MeetingTranscript.associate(models)
MeetingMergeSuggestion.associate(models)

export {
  Meeting, MeetingParticipant, MeetingAttachment, MeetingNote,
  MeetingTranscript, MeetingMergeSuggestion
}
