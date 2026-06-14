import { ensureEmailTemplates } from './ensureEmailTemplates'

// All email templates, seeded on first read.
export function listEmailTemplates() {
  return ensureEmailTemplates()
}
