import { z } from 'zod'

const fact = z.object({ label: z.string().optional(), value: z.string() })

const note = z.object({
  body: z.string(),
  notedAt: z.string().optional()
})

const add = z.object({
  emails: z.array(z.string()).optional(),
  phones: z.array(z.string()).optional(),
  linkedinUrl: z.string().optional(),
  facts: z.array(fact).optional(),
  notes: z.array(note).optional()
})

export const participant = z.object({
  ref: z.string(),
  identity: z.object({
    email: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    name: z.string().optional()
  }),
  add: add.optional()
})
