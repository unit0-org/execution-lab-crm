// A lever's 1-based, zero-padded ordinal for its "Lever NN" kicker.
export function leverNumber(index) {
  return String(index + 1).padStart(2, '0')
}
