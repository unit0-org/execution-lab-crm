import { getInvoiceSettingAction } from './actions/getInvoiceSetting'
import { InvoicingForm } from './components/InvoicingForm'

// Server-side load for the invoicing-settings tab.
export async function InvoicingServer() {
  const setting = await getInvoiceSettingAction()
  const data = setting || {}

  return <InvoicingForm setting={data} />
}
