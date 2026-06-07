import { createCategoryAction } from '../actions/createCategory'
import { setCategoryLeadsAction } from '../actions/setCategoryLeads'
import { setCategoryColorAction } from '../actions/setCategoryColor'
import { deleteCategoryAction } from '../actions/deleteCategory'

// The label mutators, each re-running `reload` once it resolves.
export function categoryMutators(reload) {
  return {
    create: (name, color) => createCategoryAction(name, color).then(reload),
    toggle: (id, on) => setCategoryLeadsAction(id, on).then(reload),
    setColor: (id, color) => setCategoryColorAction(id, color).then(reload),
    remove: (id) => deleteCategoryAction(id).then(reload)
  }
}
