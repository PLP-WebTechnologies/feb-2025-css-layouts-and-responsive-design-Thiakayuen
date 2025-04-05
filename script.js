// Select elements
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

// Toggle the 'open' class to show/hide the navigation menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

