// The address CC'd on every invoice email (override via INVOICE_CC).
export function invoiceCc() {
  return process.env.INVOICE_CC || 'abel@theexecutionlab.ca'
}
