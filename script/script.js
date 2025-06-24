document.addEventListener('DOMContentLoaded', () => {
  const themeToggler = document.querySelector('.theme-toggler');
  const body = document.body;


  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }


  themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', currentTheme);
  });
});