// Luma guest columns we map explicitly. Anything else in a row is a
// custom registration question (Luma puts these from column W onward).
export const KNOWN_COLUMNS = new Set([
  'guest_id', 'name', 'first_name', 'last_name', 'email',
  'phone_number', 'created_at', 'approval_status', 'has_joined_event',
  'utm_source', 'qr_code_url', 'amount', 'amount_tax', 'amount_discount',
  'currency', 'coupon_code', 'eth_address', 'solana_address',
  'survey_response_rating', 'survey_response_feedback', 'ticket_type_id',
  'ticket_name'
])
