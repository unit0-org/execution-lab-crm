import { listNotificationsAction }
  from '../notifications/actions/listNotifications'
import { markNotificationReadAction }
  from '../notifications/actions/markNotificationRead'
import { markAllNotificationsReadAction }
  from '../notifications/actions/markAllNotificationsRead'

// Side-effects for the notification bell.
export const loadList = () => listNotificationsAction()

export const clearAll = () => markAllNotificationsReadAction()

export function openItem(item) {
  markNotificationReadAction(item.id)
  window.location.assign(item.href)
}
