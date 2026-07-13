import { REGISTRATION_CONFIRMATION }
  from './registrationConfirmationTemplate'
import { WAITLIST_CONFIRMATION } from './waitlistConfirmationTemplate'
import { WAITLIST_PRIORITY } from './waitlistPriorityTemplate'
import { TEAM_NOTIFICATION } from './teamNotificationTemplate'
import { WAITLIST_TEAM_NOTIFICATION }
  from './waitlistTeamNotificationTemplate'
import { PAYMENT_REMINDER } from './paymentReminderTemplate'
import { PAYMENT_FOLLOWUP } from './paymentFollowupTemplate'
import { PAYMENT_PENDING } from './paymentPendingTemplate'
import { INVOICE } from './invoiceTemplate'
import { MENTION_NOTIFICATION } from './mentionNotificationTemplate'
import { OFFER_COMMENT_MENTION } from './offerCommentMentionTemplate'

// The seed templates every organization starts with. Editable in settings.
export const DEFAULT_TEMPLATES = [
  REGISTRATION_CONFIRMATION,
  WAITLIST_CONFIRMATION,
  WAITLIST_PRIORITY,
  TEAM_NOTIFICATION,
  WAITLIST_TEAM_NOTIFICATION,
  PAYMENT_REMINDER,
  PAYMENT_FOLLOWUP,
  PAYMENT_PENDING,
  INVOICE,
  MENTION_NOTIFICATION,
  OFFER_COMMENT_MENTION
]
