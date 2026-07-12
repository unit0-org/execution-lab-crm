import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'

// The row's primary label: a link to the contact when linkable, else text.
export function RowPrimary({ text, href }) {
  if (!href)
    return <Text>{text}</Text>

  return <Link href={href}>{text}</Link>
}
