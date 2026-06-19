import { TextButton } from '../atoms/TextButton'

// "Mark all read" action; hidden when there's nothing to clear.
export function MarkAllRead({ show, onClick }) {
  if (!show) return null

  return (
    <TextButton type="button" onClick={onClick}>Mark all read</TextButton>
  )
}
