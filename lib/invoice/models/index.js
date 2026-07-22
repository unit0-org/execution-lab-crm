import { Contact } from '@/lib/contact/models/Contact'
import { Company } from '@/lib/company/models'
import { Invoice } from './Invoice'
import { InvoiceLine } from './InvoiceLine'
import { InvoiceSetting } from './InvoiceSetting'

const models = { Contact, Company, Invoice, InvoiceLine }

Invoice.associate(models)
InvoiceLine.associate(models)

export { Invoice, InvoiceLine, InvoiceSetting }
