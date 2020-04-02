import './scss/main.scss';
import handleToggleClick from './app/NavToggle';
import createShoppingCartItems from './app/addToCart';

const navToggle = document.querySelector('.nav-toggle-btn');
const navLinks = document.querySelector('nav .nav-links');
const navShoppingCart = document.querySelector('.shopping-cart img');

navToggle.addEventListener('click', (e) => {
  handleToggleClick(navToggle, navLinks);
});

createShoppingCartItems();

navShoppingCart.addEventListener('click', (e) => {
  let shoppingCartHolderStyle = document.getElementById('shoppingCartHolder');
  console.log(e.target)
  shoppingCartHolderStyle.classList.toggle('display-block');
})

