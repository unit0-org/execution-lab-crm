import { Contact } from '@/lib/contact/models/Contact'
import { ContactNote } from '@/lib/contact/models/ContactNote'
import { Notification } from './Notification'
import { NoteMention } from './NoteMention'

const models = { Contact, ContactNote, Notification, NoteMention }

Notification.associate(models)
NoteMention.associate(models)

export { Notification, NoteMention }
