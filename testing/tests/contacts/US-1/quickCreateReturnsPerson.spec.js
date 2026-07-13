import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { asStaff } from '../../../framework/asStaff.js';
import { skipUntil } from '../../../framework/skipUntil.js';

asStaff();

verifyBehaviour('US-1', 5, async () => {
  skipUntil('Quick-create is the inline picker surface, not /contacts/new');
});
