import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { skipUntil } from '../../../framework/skipUntil.js';

asStaff();

// Auto-fill is not a Contacts surface: the only caller of fillLinkedinIfEmpty
// is the cohort registration sync, so this belongs with US-18.
verifyBehaviour('US-12', 2, async () => {
  skipUntil('LinkedIn auto-fill only runs in the registration sync (US-18)');
});
