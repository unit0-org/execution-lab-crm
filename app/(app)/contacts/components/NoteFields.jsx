import { TextArea } from '@/ui/atoms/TextArea'

export function NoteFields({ body }) {
  const v = body || ''

  return (
    <TextArea name="body" autoFocus defaultValue={v}
      placeholder="Write a note" required />
  )
}
