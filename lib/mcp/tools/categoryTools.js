import { registerSetContactCategories } from './setContactCategories'
import { registerAddCategoryToContacts } from './addCategoryToContacts'
import { registerRemoveCategoryFromContacts }
  from './removeCategoryFromContacts'
import { registerListCategories } from './listCategories'
import { registerCreateCategory } from './createCategory'
import { registerSetCategoryColor } from './setCategoryColor'
import { registerDeleteCategory } from './deleteCategory'

// Category (label) MCP tools: assign, bulk add/remove, list, create, recolor.
export function registerCategoryTools(server) {
  registerSetContactCategories(server)
  registerAddCategoryToContacts(server)
  registerRemoveCategoryFromContacts(server)
  registerListCategories(server)
  registerCreateCategory(server)
  registerSetCategoryColor(server)
  registerDeleteCategory(server)
}
