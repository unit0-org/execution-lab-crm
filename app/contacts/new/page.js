import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { ContactForm } from '../components/ContactForm'

export default function NewContactPage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/contacts">← Back to contacts</Link>
        <Heading>New contact</Heading>
        <ContactForm />
      </Stack>
    </Page>
  )
}
