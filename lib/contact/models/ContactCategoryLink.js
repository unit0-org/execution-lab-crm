import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

// Join row: a contact belongs to a category. Composite primary key
// (contact_id, category_id) keeps each pairing unique.
export const ContactCategoryLink = sequelize.define(
  'contact_category_link',
  {
    contact_id: { type: DataTypes.UUID, primaryKey: true },
    category_id: { type: DataTypes.UUID, primaryKey: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_category_link', timestamps: false }
)
