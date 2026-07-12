import { OwnEvent } from '../models'

// A url-less event of the same title to adopt: only when this incoming
// event has a url and no event already carries it, so a Luma event links
// the pre-existing import instead of creating a duplicate (and we never
// steal the title from an already-linked row).
export async function findAdoptableOrphan({ title, url }) {
  if (!url) return null

  const byUrl = await OwnEvent.findOne({ where: { url } })

  if (byUrl) return null

  return OwnEvent.findOne({ where: { title, url: null } })
}
