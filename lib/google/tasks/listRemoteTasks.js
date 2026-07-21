import { fetchTasksPage } from './fetchTasksPage'

const LIST = '@default'

// Every changed task in the account's default list since updatedMin,
// following pagination (includes completed, hidden and deleted tasks).
export async function listRemoteTasks(token, updatedMin) {
  const items = []
  let pageToken
  let more = true

  while (more) {
    const page = await fetchTasksPage(token, LIST, updatedMin, pageToken)

    items.push(...page.items)
    pageToken = page.next
    more = Boolean(pageToken)
  }

  return items
}
