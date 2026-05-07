import { Card } from '@/ui/Card'
import { Stack } from '@/ui/Stack'
import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { LastSyncedAt } from './LastSyncedAt'
import { AccountActions } from './AccountActions'

export function AccountRow({ account, onMutate }) {
  return (
    <Card size="sm">
      <Stack gap="sm">
        <Inline gap="md" justify="space-between" align="baseline">
          <Text>{account.email}</Text>
          <Text tone="muted" size="sm">
            <LastSyncedAt at={account.last_synced_at} />
          </Text>
        </Inline>
        <AccountActions accountId={account.id} onMutate={onMutate} />
      </Stack>
    </Card>
  )
}
