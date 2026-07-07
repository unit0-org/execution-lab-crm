import { fetchMessagesPage } from './fetchMessagesPage'

// Message ids matching `q`, newest first, following pagination up to `max`
// so a large backfill can't exhaust the function's time budget. Returns
// { ids, truncated } — truncated flags that older matches were left behind
// (a later run's watermark picks up where this one stopped).
export async function listMessageIds(token, q, max) {
  const ids = []
  let pageToken
  let more = true

  while (more && ids.length < max) {
    const page = await fetchMessagesPage(token, q, pageToken)

    ids.push(...page.items.map((message) => message.id))
    pageToken = page.next
    more = Boolean(pageToken)
  }

  return { ids: ids.slice(0, max), truncated: more }
}
