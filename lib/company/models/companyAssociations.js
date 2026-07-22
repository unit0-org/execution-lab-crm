import { Contact } from '@/lib/contact/models'
import { Company } from './Company'
import { CompanyContact } from './CompanyContact'

// A company has many contacts (owners/employees) through company_contact,
// mirrored on the contact. The link row carries the role.
Company.belongsToMany(Contact, {
  through: CompanyContact, foreignKey: 'company_id',
  otherKey: 'contact_id', as: 'contacts'
})
Contact.belongsToMany(Company, {
  through: CompanyContact, foreignKey: 'contact_id',
  otherKey: 'company_id', as: 'companies'
})
CompanyContact.belongsTo(Contact, { foreignKey: 'contact_id', as: 'contact' })
CompanyContact.belongsTo(Company, { foreignKey: 'company_id', as: 'company' })
Company.hasMany(CompanyContact, {
  foreignKey: 'company_id', as: 'company_contact', onDelete: 'CASCADE'
})
