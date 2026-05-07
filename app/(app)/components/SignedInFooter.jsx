import { SignOutForm } from '@/ui/SignOutForm'
import { Text } from '@/ui/Text'
import { footerStyle } from './SignedInFooter.styles'

export function SignedInFooter({ email }) {
  return (
    <div style={footerStyle}>
      <Text tone="muted" size="sm">{email}</Text>
      <SignOutForm />
    </div>
  )
}
