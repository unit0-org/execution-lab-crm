import { Section } from '@/ui/Section'
import { SectionHeader } from '@/ui/SectionHeader'
import { Heading } from '@/ui/Heading'
import { AccountsList } from './AccountsList'
import { ConnectAccountButton } from './ConnectAccountButton'

export function AccountsSection({ accounts, onMutate }) {
  return (
    <Section>
      <SectionHeader>
        <Heading level={2} gutter="none">Connected Google accounts</Heading>
        <ConnectAccountButton />
      </SectionHeader>
      <AccountsList accounts={accounts} onMutate={onMutate} />
    </Section>
  )
}
