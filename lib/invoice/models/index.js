import { Contact } from '../../db/models/Contact'
import { Invoice } from './Invoice'
import { InvoiceLine } from './InvoiceLine'
import { InvoiceSetting } from './InvoiceSetting'

const models = { Contact, Invoice, InvoiceLine }

Invoice.associate(models)
InvoiceLine.associate(models)

export { Invoice, InvoiceLine, InvoiceSetting }
