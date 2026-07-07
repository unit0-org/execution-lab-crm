import { sequelize } from '../../db/sequelize'
import { fields } from './OfferGeneratorInput.fields'
import { addStatics } from './OfferGeneratorInput.statics'

// One offer-configurator input for an offer. input_type names the field
// (or a lever id); value is its text. Multiple rows per repeatable type.
// Belongs to an Offer; folded on contact merge via its offer (the offer is
// reassigned, inputs ride along — see claimContactRecords).
export const OfferGeneratorInput = sequelize.define(
  'offer_generator_input', fields,
  { tableName: 'offer_generator_input', timestamps: false }
)

OfferGeneratorInput.associate = ({ Offer }) => {
  OfferGeneratorInput.belongsTo(Offer, { foreignKey: 'offer_id' })
}

addStatics(OfferGeneratorInput)
