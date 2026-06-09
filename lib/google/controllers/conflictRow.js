// Shape one SyncConflict row into the plain object the UI consumes,
// resolving the contact's display name from the supplied name map.
export function conflictRow(conflict, names) {
  return {
    id: conflict.id,
    contactId: conflict.contact_id,
    contactName: names[conflict.contact_id] || 'Unnamed contact',
    field: conflict.field,
    crmValue: conflict.crm_value,
    googleValue: conflict.google_value
  }
}
