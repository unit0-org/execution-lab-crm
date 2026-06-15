import { z } from 'zod'

// Shared schema field for destructive/financial tools. The model must
// pass confirm: true (after the human approves) for the action to run.
export const confirmField = z
  .boolean()
  .optional()
  .describe('Set true to confirm this irreversible/financial action.')
