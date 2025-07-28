document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById('sideMenu');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});

