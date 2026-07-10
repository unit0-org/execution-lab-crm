import { ManualNuggetFields } from './ManualNuggetFields'
import { EventNuggetFields } from './EventNuggetFields'

// Editable fields for a nugget. Manual nuggets let you edit the label;
// registration answers lock the shared question and edit only the value.
export function NuggetFields({ origin, label, value }) {
  if (origin === 'event') {
    return <EventNuggetFields question={label} value={value} />
  }

  return <ManualNuggetFields label={label} value={value} />
}
