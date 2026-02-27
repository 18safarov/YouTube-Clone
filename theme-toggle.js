// Theme toggle label logic
window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');

  if (!toggle || !label) return;

  function updateTheme() {
    if (toggle.checked) {
      document.body.classList.add('light-theme');
      label.textContent = 'Light';
    } else {
      document.body.classList.remove('light-theme');
      label.textContent = 'Dark';
    }
  }

  // Set initial state
  updateTheme();

  toggle.addEventListener('change', updateTheme);
});
