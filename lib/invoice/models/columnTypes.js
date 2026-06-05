import { DataTypes } from 'sequelize'

// Shared column shapes for the invoicing models.
export const uuidPk = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

export const money = { type: DataTypes.INTEGER, defaultValue: 0 }
