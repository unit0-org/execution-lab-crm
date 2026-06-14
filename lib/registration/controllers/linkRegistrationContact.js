import { resolveContactId } from '@/lib/contact/controllers/resolveContactId'

// Find-or-create the contact behind a registration, link it, return the id.
export async function linkRegistrationContact(organizationId, registration) {
  const { id } = await resolveContactId(organizationId, {
    email: registration.email,
    phone: registration.phone,
    first_name: registration.first_name,
    last_name: registration.last_name
  })

  registration.contact_id = id
  await registration.save()

  return id
}
