import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { skipUntil } from '../../../framework/skipUntil.js';

asStaff();

verifyBehaviour('US-1', 2, async () => {
  skipUntil('Confirm the in-use message copy and the created-anyway result');
});
