// A button joined to the one beside it (a split button, a segmented group):
// the shared edge loses its rounding so the pair reads as one control, and
// it stretches + centres its content so both halves share a height whatever
// padding each carries.
const flat = {
  left: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  right: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
}

const centred = {
  alignSelf: 'stretch', display: 'inline-flex',
  alignItems: 'center', justifyContent: 'center'
}

export const joined = (join) =>
  (join ? { ...flat[join], ...centred } : null)
