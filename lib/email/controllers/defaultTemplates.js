import { REGISTRATION_CONFIRMATION }
  from './registrationConfirmationTemplate'
import { WAITLIST_CONFIRMATION } from './waitlistConfirmationTemplate'
import { WAITLIST_PRIORITY } from './waitlistPriorityTemplate'
import { TEAM_NOTIFICATION } from './teamNotificationTemplate'
import { WAITLIST_TEAM_NOTIFICATION }
  from './waitlistTeamNotificationTemplate'
import { PAYMENT_REMINDER } from './paymentReminderTemplate'

// The seed templates every organization starts with. Editable in settings.
export const DEFAULT_TEMPLATES = [
  REGISTRATION_CONFIRMATION,
  WAITLIST_CONFIRMATION,
  WAITLIST_PRIORITY,
  TEAM_NOTIFICATION,
  WAITLIST_TEAM_NOTIFICATION,
  PAYMENT_REMINDER
]
