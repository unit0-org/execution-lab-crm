import { Contact } from './Contact'
import { ContactCategory } from './ContactCategory'
import { ContactCategoryLink } from './ContactCategoryLink'

const through = ContactCategoryLink

// Many-to-many: a contact has many categories and vice versa.
Contact.belongsToMany(ContactCategory, {
  through, foreignKey: 'contact_id', otherKey: 'category_id',
  as: 'categories'
})
ContactCategory.belongsToMany(Contact, {
  through, foreignKey: 'category_id', otherKey: 'contact_id',
  as: 'contacts'
})
