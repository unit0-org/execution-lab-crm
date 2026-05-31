'use client'

import { useFormStatus } from 'react-dom'
import { IconButton } from './IconButton'
import { Spinner } from './Spinner'

// <IconButton type="submit"> that shows a spinner and disables itself while
// its form's action is in flight.
export function SubmitIconButton({ children, label, ...rest }) {
  const { pending } = useFormStatus()
  if (pending) return <IconButton {...rest} type="submit" label={label} disabled><Spinner size={12} /></IconButton>
  return <IconButton {...rest} type="submit" label={label}>{children}</IconButton>
}
