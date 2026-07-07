import { addOfferInputAction } from './actions/addOfferInput'
import { updateOfferInputAction } from './actions/updateOfferInput'
import { removeOfferInputAction } from './actions/removeOfferInput'
import { setOfferInputActiveAction } from './actions/setOfferInputActive'

// The repeatable-input actions bound to one offer, for useEditableLists.
export function makeOfferListActions(offerId) {
  return {
    add: (type) => addOfferInputAction(offerId, type),
    update: (id, value) => updateOfferInputAction(offerId, id, value),
    remove: (id) => removeOfferInputAction(offerId, id),
    setActive: (id, active) => setOfferInputActiveAction(offerId, id, active)
  }
}
