import { tasksRequest } from './api'

export const FOLLOW_UPS_LIST_TITLE = 'CRM Follow-ups'

const findExisting = async (accessToken) => {
  const json = await tasksRequest(accessToken, 'GET', 'users/@me/lists')

  return (json.items || []).find((l) => l.title === FOLLOW_UPS_LIST_TITLE)?.id || null
}

const createList = async (accessToken) => {
  const json = await tasksRequest(accessToken, 'POST', 'users/@me/lists', { title: FOLLOW_UPS_LIST_TITLE })

  return json.id
}

export async function ensureFollowUpsList(accessToken) {
  const existing = await findExisting(accessToken)
  if (existing) return existing

  return createList(accessToken)
}
