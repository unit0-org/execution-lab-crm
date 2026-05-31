import { Page } from '@/ui/layout/Page'
import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'

export function NotFound() {
  return (
    <Page>
      <Text>Contact not found.</Text>
      <Link href="/contacts">← Back to contacts</Link>
    </Page>
  )
}
