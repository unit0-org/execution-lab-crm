import { Company } from '@/lib/company/models'
import { Contact } from '@/lib/contact/models'
import { sequelize } from '@/lib/db/sequelize'

// Every company with its linked contacts (id + name, for row links),
// newest first.
export async function listCompanies() {
  const rows = await Company.findAll({
    include: [{
      model: Contact, as: 'contacts',
      attributes: ['id', 'first_name', 'last_name'],
      through: { attributes: [] }
    }],
    order: [[sequelize.col('company.created_at'), 'DESC']]
  })

  return rows.map((r) => r.toJSON())
}
