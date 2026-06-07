import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize'

export const ContactRelationship = sequelize.define(
  'contact_relationship',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    from_contact_id: DataTypes.UUID,
    to_contact_id: DataTypes.UUID,
    relationship_type_id: DataTypes.UUID,
    custom_label: DataTypes.TEXT,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_relationship', timestamps: false }
)
