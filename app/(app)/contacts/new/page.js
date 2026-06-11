import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { ContactForm } from '../components/ContactForm'

export default function NewContactPage() {
  return (
    <Page>
      <Stack gap="md">
        <Heading>New contact</Heading>
        <ContactForm />
      </Stack>
    </Page>
  )
}
