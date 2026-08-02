// A guest we could never recognise again. Contacts are matched on email,
// then phone; with neither, the next sync finds nothing to match and
// creates another copy of the same person, forever. Refusing them at
// intake is the only thing that stops that — a duplicate with no
// identifier can't even be merged afterwards, because nothing ties the
// two rows together.
export function isUnidentifiable(guest) {
  return !guest?.email && !guest?.phone
}
