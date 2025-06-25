// index.js
import "./styles.css";


// wait for doc to load
document.addEventListener('DOMContentLoaded', () => {

  // cache dom
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');
  const initialLoad = document.getElementById('initialLoad');
  const header = document.querySelector('header');

  // add events if elements are present, on click toggle .is-active on $button and $nav
  if (hamburgerButton && nav) {

    hamburgerButton.addEventListener('click', () => {
      hamburgerButton.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  }

  initialLoad.classList.add('is-loaded');
  header.classList.add('is-loaded');
});
