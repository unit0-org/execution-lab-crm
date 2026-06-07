// Runs before paint so the saved theme applies with no flash. Light is the
// default; only an explicit 'dark' preference sets the attribute.
export const themeScript =
  "try{if(localStorage.getItem('theme')==='dark')"
  + "document.documentElement.setAttribute('data-theme','dark')}catch(e){}"
