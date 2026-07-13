import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { forOffer } from './classMethods/forOffer'
import { setSingle } from './classMethods/setSingle'
import { addRow } from './classMethods/addRow'
import { edit } from './classMethods/edit'
import { remove } from './classMethods/remove'
import { setActive } from './classMethods/setActive'
import { activeForOffers } from './classMethods/activeForOffers'

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

Object.assign(OfferGeneratorInput, {
  forOffer, setSingle, addRow, edit, remove, setActive, activeForOffers
})
