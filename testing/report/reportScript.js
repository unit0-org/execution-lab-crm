// Copies the fix prompt. Falls back to execCommand because the report is often
// opened over file://, where the async clipboard API is unavailable.
export const reportScript = `<script>
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  var area = document.createElement('textarea');
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand('copy');
  area.remove();
  return Promise.resolve();
}

document.addEventListener('click', function (event) {
  var button = event.target.closest('.copy');
  if (!button) return;
  var source = document.getElementById(button.dataset.fix);
  if (!source) return;

  copyText(source.textContent).then(function () {
    button.textContent = 'Copied';
    setTimeout(function () { button.textContent = 'Copy fix prompt'; }, 1600);
  });
});
</script>`;
