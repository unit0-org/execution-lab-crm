// Lifts a control above a LinkCard's stretched-link overlay (zIndex 1) so
// it stays clickable instead of the card's navigation swallowing the tap.
export const raisedControlStyle = {
  position: 'relative', zIndex: 2, display: 'inline-flex'
}
