import { addOfferInputAction } from './actions/addOfferInput'
import { updateOfferInputAction } from './actions/updateOfferInput'
import { removeOfferInputAction } from './actions/removeOfferInput'

// The repeatable-input actions bundled for useEditableLists.
export const offerListActions = {
  add: addOfferInputAction,
  update: updateOfferInputAction,
  remove: removeOfferInputAction
}
