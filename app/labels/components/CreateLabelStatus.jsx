import { Notice } from '@/ui/Notice'

function Created() { return <Notice tone="success">Label created.</Notice> }
function Failed({ message }) { return <Notice tone="error">{message}</Notice> }

export function CreateLabelStatus({ state }) {
  if (!state) return null
  if (state.ok) return <Created />

  return <Failed message={state.error} />
}
