import { Contact } from '../../db/models/Contact'
import { EventType } from './EventType'
import { OwnEvent } from './OwnEvent'
import { EventParticipant } from './EventParticipant'

const models = { Contact, EventType, OwnEvent, EventParticipant }

EventType.associate(models)
OwnEvent.associate(models)
EventParticipant.associate(models)

export { EventType, OwnEvent, EventParticipant }
