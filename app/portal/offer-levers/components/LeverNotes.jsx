import { Stack } from '@/ui/layout/Stack'
import { Section } from './Section'

// A lever's synthesis/comparison notes (e.g. "How to tell the difference").
// Hidden when the lever has none.
export function LeverNotes({ notes }) {
  if (!notes || !notes.length) return null

  return (
    <Stack gap="md">
      {notes.map((note) => (
        <Section key={note.heading} heading={note.heading}
          body={note.body} level={3} />
      ))}
    </Stack>
  )
}
