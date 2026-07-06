import { Section } from './Section'

// A lever's closing "Why this lever matters" note. Hidden when absent.
export function WhyItMatters({ paras }) {
  if (!paras || !paras.length) return null

  return (
    <Section heading="Why this lever matters" body={paras} level={3} />
  )
}
