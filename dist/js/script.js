// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
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
