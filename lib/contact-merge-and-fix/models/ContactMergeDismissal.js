import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

// A contact pair marked "not duplicates" in Merge & Fix. Stored
// canonically (contact_a_id < contact_b_id) so a pair has one row.
export const ContactMergeDismissal = sequelize.define(
  'contact_merge_dismissal',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    contact_a_id: DataTypes.UUID,
    contact_b_id: DataTypes.UUID,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_merge_dismissal', timestamps: false }
)
