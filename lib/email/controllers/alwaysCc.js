// The address CC'd on every outgoing email (override via ALWAYS_CC).
export function alwaysCc() {
  return process.env.ALWAYS_CC || 'abel@theexecutionlab.ca'
}
