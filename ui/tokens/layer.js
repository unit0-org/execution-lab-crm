// The overlay stacking order, in one place. Anything that floats over the
// page picks its layer from here rather than inventing a number — a menu
// that must open from inside a dialog has to out-rank that dialog, and
// two files each guessing their own z-index is how it silently doesn't.
export const layer = {
  scrim: 20,    // full-page dim behind a drawer
  modal: 40,    // dialog panel + its backdrop
  menu: 50,     // anchored panels: popover, combobox, swatch menu
  toast: 50,    // transient messages
  progress: 60  // route-change bar, above everything
}
