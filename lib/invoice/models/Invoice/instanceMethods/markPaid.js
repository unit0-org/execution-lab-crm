// Mark this invoice paid, stamping the payment time.
export function markPaid() {
  return this.update({ status: 'paid', paid_at: new Date() })
}
