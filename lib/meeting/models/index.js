import { Contact } from '../../db/models/Contact'
import { Meeting } from './Meeting'
import { MeetingParticipant } from './MeetingParticipant'

const models = { Contact, Meeting, MeetingParticipant }

Meeting.associate(models)
MeetingParticipant.associate(models)

export { Meeting, MeetingParticipant }
