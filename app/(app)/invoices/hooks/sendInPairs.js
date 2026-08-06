import { bulkSendInvoicesAction } from '../actions/bulkSendInvoices'
import { mergeSendResults } from './mergeSendResults'

// Two per round trip — the same pair the server renders at once (see
// lib/invoice/controllers/sendInvoices).
const AT_ONCE = 2
const empty = { sent: 0, failed: 0, error: null }

// Send the whole selection two invoices at a time, calling onProgress with
// the number finished after each pair. Sending it as one request would be
// one wait with nothing to show; a pair per round trip is what lets the
// dialog count the batch down as it goes.
// A round trip that dies takes its pair down, not the rest of the batch:
// the count stays honest and the remaining invoices still go.
const sendPair = (pair) => bulkSendInvoicesAction(pair)
  .catch(() => ({ failed: pair.length, error: 'Send failed' }))

export function sendInPairs(items, onProgress) {
  const step = (at, tally) => {
    if (at >= items.length) return Promise.resolve(tally)

    return sendPair(items.slice(at, at + AT_ONCE))
      .then((result) => {
        const done = Math.min(at + AT_ONCE, items.length)

        onProgress(done)

        return step(done, mergeSendResults(tally, result))
      })
  }

  return step(0, empty)
}
