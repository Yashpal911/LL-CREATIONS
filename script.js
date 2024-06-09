// THEME STARTS HERE //
const themeSlideToggle = document.getElementById('theme-slide-toggle-checkbox');

themeSlideToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-theme');
  const isDarkMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkMode', isDarkMode)
});

const darkMode = localStorage.getItem('darkMode');
if(darkMode === 'true')
{
  document.body.classList.add('dark-theme');
  themeSlideToggle.checked=true;
}
