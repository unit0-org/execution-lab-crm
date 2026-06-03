import { Contact } from '../../db/models/Contact'
import { Purchase } from './Purchase'

const models = { Contact, Purchase }

Purchase.associate(models)

export { Purchase }
