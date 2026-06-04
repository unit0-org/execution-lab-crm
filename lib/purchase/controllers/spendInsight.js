import { spendNugget } from './spendNugget'

// A contact's total spend as a display string, or null if they've
// bought nothing. A system insight, shown apart from manual nuggets.
export async function spendInsight(contactId) {
  const nugget = await spendNugget(contactId)

  return nugget ? nugget.answer : null
}
