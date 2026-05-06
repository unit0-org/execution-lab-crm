import { PageHeader } from '@/ui/PageHeader'
import { Heading } from '@/ui/Heading'
import { Inline } from '@/ui/Inline'
import { AppLink } from '@/ui/AppLink'
import { LinkButton } from '@/ui/LinkButton'
import { SignOutForm } from '@/ui/SignOutForm'
import { LabelFilter } from './LabelFilter'

function HeaderActions({ activeTag }) {
  return (
    <Inline gap="md">
      <LabelFilter activeTag={activeTag} />
      <AppLink href="/labels">Labels</AppLink>
      <LinkButton href="/log" tone="primary" size="sm">+ Log interaction</LinkButton>
      <AppLink href="/">Home</AppLink>
      <SignOutForm />
    </Inline>
  )
}

export function ContactsHeader({ activeTag }) {
  return (
    <PageHeader
      title={<Heading gutter="none">Contacts</Heading>}
      actions={<HeaderActions activeTag={activeTag} />}
    />
  )
}
