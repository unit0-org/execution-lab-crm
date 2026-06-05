import { registerAddEmail } from './addEmail'
import { registerUpdateEmail } from './updateEmail'
import { registerRemoveEmail } from './removeEmail'
import { registerAddPhone } from './addPhone'
import { registerUpdatePhone } from './updatePhone'
import { registerRemovePhone } from './removePhone'
import { registerAddFact } from './addFact'
import { registerListFacts } from './listFacts'
import { registerUpdateFact } from './updateFact'
import { registerRemoveFact } from './removeFact'

// Contact email, phone and fact tools.
export function registerContactFieldTools(server) {
  registerAddEmail(server)
  registerUpdateEmail(server)
  registerRemoveEmail(server)
  registerAddPhone(server)
  registerUpdatePhone(server)
  registerRemovePhone(server)
  registerAddFact(server)
  registerListFacts(server)
  registerUpdateFact(server)
  registerRemoveFact(server)
}
