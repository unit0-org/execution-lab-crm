const LABELS = { name: 'Same name', phone: 'Same phone' }

// Human label for why a group was flagged as duplicates.
export function reasonLabel(reason) {
  return LABELS[reason] || reason
}
