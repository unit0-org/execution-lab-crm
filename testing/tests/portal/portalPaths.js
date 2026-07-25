// Where the portal is served in the suite. With no NEXT_PUBLIC_PORTAL_URL
// set, it lives under /portal on the CRM origin — exactly what
// portalRoutePath produces, so these mirror the app's own routing.
export const SIGN_IN = '/portal/signin';
export const ACCOUNT = '/portal/account';
export const BILLING = '/portal/billing';
export const RESOURCES = '/portal/resources';
export const TOOLS = '/portal/tools';
export const SETTINGS = '/portal/settings';

// Every gated member page, for the checks that must hold on all of them and
// not just the landing one.
export const MEMBER_PAGES = [ACCOUNT, BILLING, RESOURCES, TOOLS, SETTINGS];
