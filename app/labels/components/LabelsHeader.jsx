import { PageHeader } from '@/ui/PageHeader'
import { Heading } from '@/ui/Heading'
import { Inline } from '@/ui/Inline'
import { AppLink } from '@/ui/AppLink'
import { SignOutForm } from '@/ui/SignOutForm'

function HeaderActions() {
  return (
    <Inline gap="md">
      <AppLink href="/contacts">Contacts</AppLink>
      <AppLink href="/">Home</AppLink>
      <SignOutForm />
    </Inline>
  )
}

export function LabelsHeader() {
  return (
    <PageHeader
      title={<Heading gutter="none">Labels</Heading>}
      actions={<HeaderActions />}
    />
  )
}
