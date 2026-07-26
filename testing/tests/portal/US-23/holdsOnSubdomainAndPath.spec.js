import { verifyBehaviour } from '../../../framework/verifyBehaviour.js';
import { skipUntil } from '../../../framework/skipUntil.js';

skipUntil(
  'Needs requests on a portal.* host. The suite serves the app on ' +
  'localhost, where only the /portal path form exists — the subdomain ' +
  'form goes through portalRewrite, which never runs here.'
);

verifyBehaviour('US-23', 3, async () => {});
