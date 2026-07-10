import { apiGuestTimestamps } from './apiGuestTimestamps'

function firstTicket(guest) {
  return (guest.event_tickets || [])[0] || {}
}

function couponCode(guest) {
  const order = (guest.event_ticket_orders || [])[0]

  return order?.coupon_info?.code || null
}

// Ticket + payment fields for a participation. Luma API amounts are
// already integer cents.
export function buildApiParticipant(guest) {
  const ticket = firstTicket(guest)

  return {
    ticket_name: ticket.name || null,
    amount_paid_cents: Math.round(Number(ticket.amount)) || 0,
    currency: ticket.currency || null,
    coupon_code: couponCode(guest),
    ...apiGuestTimestamps(guest)
  }
}
