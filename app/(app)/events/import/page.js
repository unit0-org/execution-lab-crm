import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ImportView } from '../components/ImportView'

export default function ImportPage() {
  return (
    <Page>
      <Stack gap="md">
        <Heading>Import guests</Heading>
        <Link href="/events">← Events</Link>
        <ImportView />
      </Stack>
    </Page>
  )
}
