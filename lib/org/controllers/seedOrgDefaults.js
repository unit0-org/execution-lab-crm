import { RelationshipType } from '@/lib/db/models'
import { EventType } from '@/lib/event/models'

const RELATIONSHIPS = ['married to', 'partner of', 'parent of', 'child of',
  'sibling of', 'friend of', 'works with', 'colleague of', 'reports to',
  'manages', 'mentor of', 'knows']

const EVENT_TYPES = ['online', 'in-person']

const rows = (org, key, values) =>
  values.map((value) => ({ organization_id: org, [key]: value }))

// Seed a new organization with the starter relationship and event types
// every org begins with (these became per-organization after scoping).
export async function seedOrgDefaults(organizationId) {
  const rels = rows(organizationId, 'label', RELATIONSHIPS)
  const types = rows(organizationId, 'name', EVENT_TYPES)

  await RelationshipType.bulkCreate(rels)
  await EventType.bulkCreate(types)
}
