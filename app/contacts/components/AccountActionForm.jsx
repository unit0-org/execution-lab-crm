import { Button } from '@/ui/Button'
import { InlineForm } from '@/ui/InlineForm'

export function AccountActionForm({ action, accountId, tone, children }) {
  return (
    <InlineForm action={action}>
      <input type="hidden" name="account_id" value={accountId} />
      <Button type="submit" size="sm" tone={tone}>{children}</Button>
    </InlineForm>
  )
}
