import { Heading } from '@/ui/atoms/Heading'

export function NoteFormHeading({ text }) {
  if (!text) return null

  return <Heading level={3}>{text}</Heading>
}
