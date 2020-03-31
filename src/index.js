import './scss/main.scss';
import handleToggleClick from './app/NavToggle';


const navToggle = document.querySelector('.nav-toggle-btn');
const navLinks = document.querySelector('nav .nav-links');

navToggle.addEventListener('click', (e) => {
  handleToggleClick(navToggle, navLinks);
});