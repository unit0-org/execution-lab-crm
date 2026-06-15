import { registerListContacts } from './listContacts'
import { registerSearchContacts } from './searchContacts'
import { registerGetContact } from './getContact'
import { registerContactActivity } from './contactActivity'
import { registerCreateContact } from './createContact'
import { registerUpdateContact } from './updateContact'
import { registerDeleteContact } from './deleteContact'
import { registerDeleteContacts } from './deleteContacts'
import { registerMergeContacts } from './mergeContacts'
import { registerCategoryTools } from './categoryTools'

// Contact CRUD, merging and category (label) tools.
export function registerContactTools(server) {
  registerListContacts(server)
  registerSearchContacts(server)
  registerGetContact(server)
  registerContactActivity(server)
  registerCreateContact(server)
  registerUpdateContact(server)
  registerDeleteContact(server)
  registerDeleteContacts(server)
  registerMergeContacts(server)
  registerCategoryTools(server)
}
