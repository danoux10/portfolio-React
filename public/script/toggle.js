const navContent = document.getElementById('nav-content');
const navToggle = document.getElementById('navbar-toggle');

function toggleView() {
  navToggle.classList.toggle('active');
  navContent.classList.toggle('close')
}

navToggle.addEventListener('click', toggleView);

const body = document.querySelector('body');
const themeToggle = document.getElementById('theme-toggle');

function themeSwitch() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

themeToggle.addEventListener('click', themeSwitch);