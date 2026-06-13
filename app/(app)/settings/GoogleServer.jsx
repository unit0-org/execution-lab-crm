import { listGoogleAccountsAction } from './actions/listGoogleAccounts'
import { GoogleContactsView } from './components/GoogleContactsView'

// Server-side load for the Google Contacts tab.
export async function GoogleServer() {
  const accounts = await listGoogleAccountsAction()

  return <GoogleContactsView accounts={accounts} />
}
