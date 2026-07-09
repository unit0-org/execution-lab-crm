import { toInitialState } from './toInitialState'
import { initialValues } from './initialValues'
import { versionLabel } from './versionLabel'
import { contextRows, leverRows, generatedBlocks } from './offerDocSections'

// Shape saved offer rows into the document model the PDF renderer draws:
// offer context, the 15 levers, and any generated offers pasted back in.
export function buildOfferDocument(offer, inputs) {
  const { singles, lists } = toInitialState(inputs)
  const values = { ...initialValues, ...singles }

  return {
    kicker: 'OFFER LEVERS',
    title: offer.name || 'Untitled offer',
    subtitle: versionLabel(offer),
    sections: [
      { heading: 'Offer context', rows: contextRows(values, lists) },
      { heading: 'Offer levers', rows: leverRows(values) },
      { heading: 'Generated offers', blocks: generatedBlocks(lists) }
    ]
  }
}
