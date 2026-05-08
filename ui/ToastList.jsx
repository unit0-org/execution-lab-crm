import { Toast } from './Toast'
import { listStyle } from './ToastList.styles'

export function ToastList({ items }) {
  if (!items.length) return null
  return (
    <div style={listStyle} role="status" aria-live="polite">
      {items.map((i) => <Toast key={i.id} tone={i.tone}>{i.message}</Toast>)}
    </div>
  )
}
