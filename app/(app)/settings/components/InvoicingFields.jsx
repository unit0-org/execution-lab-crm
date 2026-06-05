import { InvoicingTextFields } from './InvoicingTextFields'
import { InvoicingToggles } from './InvoicingToggles'

export function InvoicingFields({ setting }) {
  return (
    <>
      <InvoicingTextFields setting={setting} />
      <InvoicingToggles setting={setting} />
    </>
  )
}
