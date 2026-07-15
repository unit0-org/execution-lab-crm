import { Heading } from '@/ui/atoms/Heading'

// Just the section title — a note is added in the always-present composer
// below, not a +-opened modal (matching the Figma comment UX).
export function NotesHeader() {
  return <Heading level={3} gutter="none">Notes</Heading>
}
