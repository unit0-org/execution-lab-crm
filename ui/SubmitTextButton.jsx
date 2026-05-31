'use client'

import { useFormStatus } from 'react-dom'
import { TextButton } from './TextButton'
import { Spinner } from './Spinner'

// Inline text submit button that swaps to a spinner while its form runs.
export function SubmitTextButton({ children, ...rest }) {
  const { pending } = useFormStatus()
  if (pending) return <TextButton {...rest} type="submit" disabled><Spinner size={10} /></TextButton>
  return <TextButton {...rest} type="submit">{children}</TextButton>
}
