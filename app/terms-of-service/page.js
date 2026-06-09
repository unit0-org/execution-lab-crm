import { LegalPage } from '../(public)/components/LegalPage'
import { LegalSection } from '../(public)/components/LegalSection'
import * as text from './sections'

export const metadata = { title: 'Terms of Service' }

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <LegalSection title="Acceptable use">
        {text.ACCEPTABLE_USE}
      </LegalSection>
      <LegalSection title="No warranty">
        {text.NO_WARRANTY}
      </LegalSection>
      <LegalSection title="Contact">{text.CONTACT}</LegalSection>
    </LegalPage>
  )
}
