import { findDuplicateGroups }
  from '@/lib/contact-merge-and-fix/controllers/findDuplicateGroups'
import { toolResult } from '../toolResult'

// MCP tool: list suggested duplicate-contact groups (read-only).
export function registerFindDuplicateContacts(server) {
  server.tool(
    'find_duplicate_contacts',
    'List suggested duplicate contacts, grouped by why they match ' +
      '(same name or same phone). Read-only; fold a group into one with ' +
      'merge_contacts.',
    {},
    async () => toolResult(await findDuplicateGroups())
  )
}
