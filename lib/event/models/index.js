import { Contact } from '../../db/models/Contact'
import { EventType } from './EventType'
import { OwnEvent } from './OwnEvent'
import { EventParticipant } from './EventParticipant'
import { RegistrationQuestion } from './RegistrationQuestion'
import { ParticipantAnswer } from './ParticipantAnswer'

const models = { Contact, EventType, OwnEvent, EventParticipant }

EventType.associate(models)
OwnEvent.associate(models)
EventParticipant.associate(models)

export {
  EventType,
  OwnEvent,
  EventParticipant,
  RegistrationQuestion,
  ParticipantAnswer
}
