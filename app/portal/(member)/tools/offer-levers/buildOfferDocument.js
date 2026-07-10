import { toInitialState } from './toInitialState'
import { initialValues } from './initialValues'
import { versionLabel } from './versionLabel'
import { offerDateline } from './offerDateline'
import { contextRows, leverTable, generatedBlocks }
  from './offerDocSections'

// Shape saved offer rows into the document model the PDF renderer draws:
// offer context, the 15 levers as a table, and generated offers pasted back.
export function buildOfferDocument(offer, inputs) {
  const { singles, lists } = toInitialState(inputs)
  const values = { ...initialValues, ...singles }

  return {
    kicker: 'OFFER LEVERS',
    title: offer.name || 'Untitled offer',
    subtitle: versionLabel(offer),
    dateline: offerDateline(offer),
    sections: [
      { heading: 'Offer context', rows: contextRows(values, lists) },
      { heading: 'Offer levers', table: leverTable(values) },
      { heading: 'Generated offers', blocks: generatedBlocks(lists) }
    ]
  }
}
