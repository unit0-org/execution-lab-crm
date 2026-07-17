import { Card } from '@/ui/atoms/Card'
import { Text } from '@/ui/atoms/Text'

const inUseMessage = (emails) =>
  `Already in use by another contact, so not added: ${emails}`

// A contact is still created when one of its emails is taken — the create
// redirect carries those emails here, so the person sees what was left off.
export async function EmailInUseNotice({ searchParams }) {
  const { emailInUse } = await searchParams

  if (!emailInUse) return null

  return (
    <Card tone="warm">
      <Text tone="danger">{inUseMessage(emailInUse)}</Text>
    </Card>
  )
}
