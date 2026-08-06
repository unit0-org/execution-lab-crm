import { sendInPairs } from './sendInPairs'
import { sendable } from './editDraft'

// Run a batch send: count the invoices off as each pair lands, then hand the
// tally to `finish`. A request that throws outright still has to report, or
// the dialog spins forever on a batch that already stopped.
export function sendRunner({ setSending, setProgress, finish }) {
  return (list) => {
    const items = sendable(list)
    const track = (done) => setProgress({ done, total: items.length })

    setSending(true)
    track(0)
    sendInPairs(items, track)
      .then(finish)
      .catch(() => finish({ failed: 1, error: 'Send failed' }))
  }
}
