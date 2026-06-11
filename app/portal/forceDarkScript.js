// The portal is a dark-only client surface; force the dark theme before
// paint so the admin's clock-based theme never flashes through.
export const forceDarkScript =
  "try{document.documentElement.setAttribute('data-theme','dark')}"
  + "catch(e){}"
