import { listNotificationsAction }
  from '../notifications/actions/listNotifications'
import { markNotificationReadAction }
  from '../notifications/actions/markNotificationRead'
import { markAllNotificationsReadAction }
  from '../notifications/actions/markAllNotificationsRead'

// Side-effects for the notification bell.
export const loadList = () => listNotificationsAction()

export function openItem(item) {
  markNotificationReadAction(item.id)
  window.location.assign(item.href)
}

// Mark one read: drop its row and decrement the badge, panel stays open.
export const markItemRead = (setItems, setUnread) => (item) => {
  markNotificationReadAction(item.id)
  setItems((rows) => rows.filter((row) => row.id !== item.id))
  setUnread((count) => Math.max(0, count - 1))
}

// Mark all read: clear the list, zero the badge, and close the panel.
export const markAllRead = (setItems, setUnread, setOpen) => () =>
  markAllNotificationsReadAction().then(() => {
    setItems([])
    setUnread(0)
    setOpen(false)
  })
