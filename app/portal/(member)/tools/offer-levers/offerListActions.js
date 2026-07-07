import { addOfferInputAction } from './actions/addOfferInput'
import { updateOfferInputAction } from './actions/updateOfferInput'
import { removeOfferInputAction } from './actions/removeOfferInput'

// The repeatable-input actions bound to one offer, for useEditableLists.
export function makeOfferListActions(offerId) {
  return {
    add: (type) => addOfferInputAction(offerId, type),
    update: (id, value) => updateOfferInputAction(offerId, id, value),
    remove: (id) => removeOfferInputAction(offerId, id)
  }
}
