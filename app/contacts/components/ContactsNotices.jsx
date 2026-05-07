import { Notice } from '@/ui/Notice'

function ConnectedNotice({ visible }) {
  if (!visible) return null

  return (
    <Notice tone="success">
      Account connected. Click <strong>Sync</strong> to pull contacts.
    </Notice>
  )
}

function ErrorNotice({ message }) {
  if (!message) return null

  return <Notice tone="error">{message}</Notice>
}

export function ContactsNotices({ connected, error }) {
  return (
    <>
      <ConnectedNotice visible={connected} />
      <ErrorNotice message={error} />
    </>
  )
}
