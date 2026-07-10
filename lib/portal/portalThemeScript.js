// Runs before paint so the portal opens in the right theme with no flash.
// It mirrors lib/portal/theme/schedule.js: a saved mode (light/dark/auto),
// where auto follows the switch times. Legacy 'portalTheme' (light/dark)
// still seeds the mode, so returning visitors keep their earlier choice.
export const portalThemeScript =
  "try{"
  + "var m=localStorage.getItem('portalThemeMode')"
  + "||localStorage.getItem('portalTheme')||'auto';"
  + "var t=m;"
  + "if(m==='auto'){"
  + "var f=function(s){var p=s.split(':');return p[0]*60+ +p[1]};"
  + "var da=f(localStorage.getItem('portalDarkAt')||'18:00');"
  + "var ga=f(localStorage.getItem('portalDayAt')||'06:00');"
  + "var d=new Date();var c=d.getHours()*60+d.getMinutes();"
  + "var k=da>ga?(c>=da||c<ga):(c>=da&&c<ga);"
  + "t=k?'dark':'light';}"
  + "document.documentElement.setAttribute('data-theme',t);"
  + "}catch(e){}"
