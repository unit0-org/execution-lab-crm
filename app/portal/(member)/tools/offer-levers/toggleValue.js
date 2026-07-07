// Toggle `opt` within `selected`, keeping the result in `options` order.
export const toggleValue = (selected, options, opt) =>
  options.filter((o) =>
    o === opt ? !selected.includes(opt) : selected.includes(o))
