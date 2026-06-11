// Runs before paint so the portal opens in light mode by default, with no
// flash. A visitor's manual toggle sticks (tracked in localStorage under a
// portal-only key, isolated from the admin app's clock-based theme).
export const portalThemeScript =
  "try{var t=localStorage.getItem('portalTheme')||'light';"
  + "document.documentElement.setAttribute('data-theme',t)}catch(e){}"
