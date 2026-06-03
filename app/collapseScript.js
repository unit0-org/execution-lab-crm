// Runs before paint so the sidebar's collapsed width is correct on the
// first render (no load animation). Mirror of the localStorage key.
export const collapseScript =
  "try{if(localStorage.getItem('sidebar-collapsed')==='1')"
  + "document.documentElement.classList.add('sidebar-collapsed')}catch(e){}"
