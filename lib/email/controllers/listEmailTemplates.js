import { ensureEmailTemplates } from './ensureEmailTemplates'

// All of the org's email templates, seeded on first read.
export function listEmailTemplates(organizationId) {
  return ensureEmailTemplates(organizationId)
}
