// Resolve the best payload to render: edited_payload overrides payload.
export const displayPayload = (card) => card.edited_payload || card.payload

export const displayName = (card) => card.contacts?.display_name || displayPayload(card).contactEmail || 'someone'

const WINDOW_LABEL = {
  'this-week':  'this week',
  'two-weeks':  'in the next two weeks',
  'month':      'within a month',
}

export const windowLabel = (w) => WINDOW_LABEL[w] || 'soon'
