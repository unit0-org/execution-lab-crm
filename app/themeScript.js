// Runs before paint so the right theme applies with no flash. The theme
// follows the clock (dark 18:00–05:00) unless a manual toggle is still in
// effect for the current period (both tracked in localStorage).
export const themeScript =
  "try{var h=new Date().getHours();"
  + "var p=h>=18||h<5?'night':'day';"
  + "var s=p==='night'?'dark':'light';"
  + "var t=localStorage.getItem('themeAutoPeriod')===p"
  + "?localStorage.getItem('theme')||s:s;"
  + "document.documentElement.setAttribute('data-theme',t);"
  + "localStorage.setItem('theme',t)}catch(e){}"
