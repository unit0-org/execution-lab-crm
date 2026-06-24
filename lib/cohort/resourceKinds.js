// The three cohort-resource kinds: the stored value, the operator-facing
// form label, and the member-facing group title. Single source of truth
// shared by the model validation, the admin form, and the portal list.
export const RESOURCE_KINDS = [
  { kind: 'note', formLabel: 'Note (Google Doc)', title: 'Notes' },
  { kind: 'resource', formLabel: 'Resource (file link)', title: 'Resources' },
  { kind: 'recording', formLabel: 'Recording (YouTube)', title: 'Recordings' }
]

export const RESOURCE_KIND_VALUES = RESOURCE_KINDS.map((k) => k.kind)
