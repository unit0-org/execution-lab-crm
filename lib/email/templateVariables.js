// The {{vars}} available to each template, surfaced in the editor.
export const TEMPLATE_VARIABLES = {
  registration_confirmation: [
    'first_name', 'cohort_name', 'start_date', 'price'
  ],
  waitlist_confirmation: ['first_name'],
  waitlist_priority: ['first_name', 'cohort_name', 'register_url'],
  team_notification: ['first_name', 'last_name', 'cohort_name', 'email'],
  waitlist_team_notification: [
    'first_name', 'last_name', 'email', 'business', 'challenge'
  ],
  invoice: ['number', 'total', 'view_url']
}
