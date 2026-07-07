import { Contact } from '@/lib/contact/models/Contact'
import { EmailTemplate } from './EmailTemplate'
import { ContactEmailMessage } from './ContactEmailMessage'

ContactEmailMessage.associate({ Contact })

export { EmailTemplate, ContactEmailMessage }
