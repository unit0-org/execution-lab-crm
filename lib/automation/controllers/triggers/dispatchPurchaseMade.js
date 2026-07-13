import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a new purchase was recorded.
export function dispatchPurchaseMade(email) {
  return dispatchTrigger('purchase_made', { email })
}
