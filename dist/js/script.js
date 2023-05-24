// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const scrollTop = document.querySelector('#scroll-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    scrollTop.classList.remove('hidden');
    scrollTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    scrollTop.classList.remove('flex');
    scrollTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6cdi22VGvDoMO-50m2CUSziI5eUCvreVJKTZTs10b9U2t3_eeLAZMuQMM8uEBxctC/exec';
const form = document.forms['dafbians-contact-form'];
const btnSender = document.querySelector('.btn-send');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      myAlert.classList.toggle('hidden');
      myAlert.addEventListener('click', function () {
        document.querySelector('.my-alert').style.display = 'none';
      });
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

// Close navbar diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode
const darkMode = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkMode.addEventListener('click', function () {
  if (darkMode.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
    html.classList.remove('dark');
  }
});

// switch toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkMode.checked = true;
} else {
  darkMode.checked = false;
}

// Copyright
const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();
