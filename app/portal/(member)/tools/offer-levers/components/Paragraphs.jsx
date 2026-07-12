import { Text } from '@/ui/atoms/Text'

// Render each paragraph of a text block as its own line of body text.
export function Paragraphs({ items }) {
  return (
    <>
      {items.map((para, i) => (
        <Text key={i} tone="muted" size="sm">{para}</Text>
      ))}
    </>
  )
}
