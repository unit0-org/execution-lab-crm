import { CohortResource } from '../models'
import { RESOURCE_KIND_VALUES } from '../resourceKinds'

const clean = (value) => (value || '').trim()

// Create a resource inside a folder. Links only; kind must be one of
// note|resource|recording.
export function addCohortResource(input) {
  const title = clean(input.title)
  const url = clean(input.url)

  if (!RESOURCE_KIND_VALUES.includes(input.kind))
    return Promise.resolve({ error: 'Pick a type' })

  if (!title || !url)
    return Promise.resolve({ error: 'Title and link are required' })

  return CohortResource.create({
    folder_id: input.folderId, kind: input.kind, title, url
  }).then(() => ({ ok: true }))
}
