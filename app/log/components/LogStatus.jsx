import { Notice } from '@/ui/Notice'

function SuccessNotice() {
  return <Notice tone="success">Entry logged.</Notice>
}

function ErrorNotice({ message }) {
  return <Notice tone="error">{message}</Notice>
}

export function LogStatus({ state }) {
  if (!state) return null
  if (state.ok) return <SuccessNotice />
  if (state.error) return <ErrorNotice message={state.error} />

  return null
}
