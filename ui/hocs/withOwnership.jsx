// Higher-order component that gates a control on record ownership: the
// wrapped component renders only when `viewerId === ownerId`, otherwise
// nothing. Keeps "is this mine?" authorization out of presentational
// components (see the HOC rule in AGENTS.md). `ownerId`/`viewerId` are
// consumed here; every other prop passes through to the wrapped component.
export function withOwnership(Wrapped) {
  return function OwnerOnly({ ownerId, viewerId, ...rest }) {
    if (ownerId !== viewerId) return null

    return <Wrapped {...rest} />
  }
}
