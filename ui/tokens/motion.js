// Motion tokens — the two durations and the one easing curve every animated
// primitive shares, mirroring the custom properties in globals.css so
// JS-authored styles and CSS never drift apart. `quick` is for a state
// change you barely notice (hover, press); `soft` is for something arriving
// or leaving (a dialog, a panel, a revealed section).
export const motion = {
  quick: 'var(--motion-quick)',
  soft: 'var(--motion-soft)',
  ease: 'var(--motion-ease)'
}

// One entrance animation, ready to spread into a style object. `backwards`
// holds the first frame before it starts, so nothing flashes at full
// opacity. It must not be `both`: every entrance ends where the element
// already sits, and holding that last frame leaves an identity `transform`
// behind — enough to make the element the containing block for any
// `position: fixed` descendant, which drops dropdowns inside a dialog far
// from the field they belong to.
export const entrance = (name, speed = 'soft') => ({
  animation: `${name} ${motion[speed]} ${motion.ease} backwards`
})

// A quick transition across properties — what a control uses to answer a
// hover, a focus or a press.
export const quickTransition = (...properties) =>
  properties.map((name) => `${name} ${motion.quick} ${motion.ease}`).join(', ')
