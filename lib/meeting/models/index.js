import { Contact } from '../../db/models/Contact'
import { Meeting } from './Meeting'
import { MeetingParticipant } from './MeetingParticipant'
import { MeetingAttachment } from './MeetingAttachment'

const models = { Contact, Meeting, MeetingParticipant, MeetingAttachment }

Meeting.associate(models)
MeetingParticipant.associate(models)
MeetingAttachment.associate(models)

export { Meeting, MeetingParticipant, MeetingAttachment }
