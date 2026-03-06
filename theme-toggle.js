// Theme toggle label logic
window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  const logo = document.querySelector('.youtube-logo');

  if (!toggle || !label) return;

  function updateTheme() {
    if (toggle.checked) {
      document.body.classList.add('light-theme');
      label.textContent = 'Light';
      if (logo) logo.src = 'icons/youtube-logo.svg';
    } else {
      document.body.classList.remove('light-theme');
      label.textContent = 'Dark';
      if (logo) logo.src = 'icons/YouTube-White.svg';
    }
  }

  // Set initial state
  updateTheme();

  toggle.addEventListener('change', updateTheme);
});
