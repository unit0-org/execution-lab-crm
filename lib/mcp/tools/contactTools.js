import { registerListContacts } from './listContacts'
import { registerGetContact } from './getContact'
import { registerContactActivity } from './contactActivity'
import { registerCreateContact } from './createContact'
import { registerUpdateContact } from './updateContact'
import { registerDeleteContact } from './deleteContact'
import { registerDeleteContacts } from './deleteContacts'
import { registerMergeContacts } from './mergeContacts'
import { registerSetContactCategories } from './setContactCategories'
import { registerListCategories } from './listCategories'
import { registerCreateCategory } from './createCategory'
import { registerDeleteCategory } from './deleteCategory'

// Contact CRUD, merging and category tools.
export function registerContactTools(server) {
  registerListContacts(server)
  registerGetContact(server)
  registerContactActivity(server)
  registerCreateContact(server)
  registerUpdateContact(server)
  registerDeleteContact(server)
  registerDeleteContacts(server)
  registerMergeContacts(server)
  registerSetContactCategories(server)
  registerListCategories(server)
  registerCreateCategory(server)
  registerDeleteCategory(server)
}
