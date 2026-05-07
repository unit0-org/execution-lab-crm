import { Notice } from '@/ui/Notice'

function Created() { return <Notice tone="success">Type created.</Notice> }
function Failed({ message }) { return <Notice tone="error">{message}</Notice> }

export function CreateStatus({ state }) {
  if (!state) return null
  if (state.ok) return <Created />

  return <Failed message={state.error} />
}
