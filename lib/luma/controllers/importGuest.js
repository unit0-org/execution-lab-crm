import { mapLumaGuest } from './mapLumaGuest'
import { importMappedGuest } from './importMappedGuest'

// Import one Luma CSV guest row into an event, creating the contact if
// needed. Shares the upsert path with the live API import.
export function importGuest(event, row) {
  return importMappedGuest(event, mapLumaGuest(row, event.date))
}
