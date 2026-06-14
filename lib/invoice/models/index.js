import { Contact } from '@/lib/contact/models/Contact'
import { Invoice } from './Invoice'
import { InvoiceLine } from './InvoiceLine'
import { InvoiceSetting } from './InvoiceSetting'

const models = { Contact, Invoice, InvoiceLine }

Invoice.associate(models)
InvoiceLine.associate(models)

export { Invoice, InvoiceLine, InvoiceSetting }
