import { DataTypes } from 'sequelize'

// Shared column shapes for the invoicing models. Factories — each call
// returns a fresh object so Sequelize never cross-maps field names between
// columns that reuse the shape (a shared object makes every cents column
// resolve to the first one defined, e.g. subtotal_cents).
export const uuidPk = () => ({
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
})

export const money = () => ({ type: DataTypes.INTEGER, defaultValue: 0 })
