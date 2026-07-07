// Map a lever's parallel options/optDesc arrays into CheckList options.
export const toCheckOptions = (lever) =>
  lever.options.map((value, i) => ({
    value, label: value, desc: lever.optDesc[i]
  }))
