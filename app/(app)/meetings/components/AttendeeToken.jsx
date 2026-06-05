import { Token } from '@/ui/molecules/Token'

// A single attendee token wired to remove itself by value.
export function AttendeeToken({ item, onRemove }) {
  const remove = () => onRemove(item.value)

  return <Token label={item.label} onRemove={remove} />
}
