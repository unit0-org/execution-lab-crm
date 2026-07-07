import { Inline } from '@/ui/layout/Inline'
import { ContactActivityButton } from './ContactActivityButton'

// Top-of-page bar to add a note, fact, or relationship. Buttons wrap to
// the next line on narrow (mobile) screens.
export function ContactActivityBar({ act }) {
  return (
    <Inline gap="sm">
      <ContactActivityButton label="Note" onClick={act.note.show} />
      <ContactActivityButton label="Fact" onClick={act.fact.show} />
      <ContactActivityButton label="Relationship"
        onClick={act.rel.show} />
      <ContactActivityButton label="Task" onClick={act.task.show} />
    </Inline>
  )
}
