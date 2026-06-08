// A friendly message for a failed invoice save.
export function invoiceSaveError(e) {
  if (e.name === 'SequelizeUniqueConstraintError') {
    return 'That invoice number is already in use.'
  }

  return e.message
}
