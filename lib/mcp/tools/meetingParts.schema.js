import { z } from 'zod'

export const meeting = z.object({
  sourceDriveId: z.string(),
  title: z.string().optional(),
  startsAt: z.string().optional(),
  endsAt: z.string().optional(),
  online: z.boolean().optional()
})

export const relationship = z.object({
  from: z.string(),
  to: z.string(),
  typeId: z.string().optional(),
  customLabel: z.string().optional()
})

export const meetingNote = z.object({
  key: z.string().optional(),
  body: z.string()
})

export const transcript = z.object({
  driveFileId: z.string(),
  sourceUrl: z.string().optional(),
  text: z.string().optional()
})
