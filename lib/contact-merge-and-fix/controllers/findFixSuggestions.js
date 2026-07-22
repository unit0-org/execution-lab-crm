import { nameFixes } from './nameFixes'
import { phoneFixes } from './phoneFixes'

// Every safe normalization fix on offer: names and phones carrying stray
// whitespace. Derived at read time; applying is opt-in and batched.
export async function findFixSuggestions() {
  const [names, phones] = await Promise.all([nameFixes(), phoneFixes()])

  return [...names, ...phones]
}
