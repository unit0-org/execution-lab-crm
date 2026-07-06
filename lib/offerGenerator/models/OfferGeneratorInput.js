import { sequelize } from '../../db/sequelize'
import { fields } from './OfferGeneratorInput.fields'
import { addStatics } from './OfferGeneratorInput.statics'

// One offer-configurator input for a contact. input_type names the field
// (or a lever id); value is its text. Multiple rows per repeatable type.
// Folded on contact merge (see claimContactRecords).
export const OfferGeneratorInput = sequelize.define(
  'offer_generator_input', fields,
  { tableName: 'offer_generator_input', timestamps: false }
)

OfferGeneratorInput.associate = ({ Contact }) => {
  OfferGeneratorInput.belongsTo(Contact, { foreignKey: 'contact_id' })
}

addStatics(OfferGeneratorInput)
