const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menu?.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('mobile-open')));

document.querySelector('.signup-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email');
  if (!email.value) return;
  document.querySelector('.toast').classList.add('show');
  email.value = '';
  window.setTimeout(() => document.querySelector('.toast').classList.remove('show'), 4200);
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.desktop-nav a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));
