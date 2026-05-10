import { createPerson } from '@/lib/google/peopleWrite/createPerson'

// Creates the contact in Google. The next People-API sync mirrors it
// into our `contacts` table — we don't double-write.
export async function routeNewContact(supabase, card, owner) {
  await createPerson(owner.accessToken, card.effective)
}
