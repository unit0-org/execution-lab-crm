// Associations are wired once in the registration-domain index; re-export
// WaitlistEntry from there so it's never associated twice.
export { WaitlistEntry } from '../../registration/models'
