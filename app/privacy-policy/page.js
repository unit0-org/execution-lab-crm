import { LegalPage } from '../(public)/components/LegalPage'
import { LegalSection } from '../(public)/components/LegalSection'
import * as text from './sections'

export const metadata = { title: 'Privacy Policy' }

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection title="Google user data">
        {text.GOOGLE_DATA}
      </LegalSection>
      <LegalSection title="Storage and sharing">
        {text.STORAGE}
      </LegalSection>
      <LegalSection title="Limited use">
        {text.LIMITED_USE}
      </LegalSection>
      <LegalSection title="Contact">{text.CONTACT}</LegalSection>
    </LegalPage>
  )
}
