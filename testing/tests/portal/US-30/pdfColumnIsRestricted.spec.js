import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { skipUntil } from '../../../framework/skipUntil.js';

// The matrix's invoice-PDF column claims "own only" for members and
// "refused" for everyone unauthenticated. The route enforces none of it —
// same unfixed gap as US-26's third behaviour.
skipUntil('Invoice PDF route has no ownership check — behaviour not built');

verifyBehaviour('US-30', 2, async () => {});
