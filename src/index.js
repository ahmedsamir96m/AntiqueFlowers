import './scss/main.scss';
import handleToggleClick from './app/NavToggle';
import createShoppingCartItems from './app/addToCart';
import packgesShuffle from './app/packages';


// Helper Function To Select all other siblings of specific element
export const getSiblings = function (elem) {

  // Setup siblings array and get the first sibling
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }

  return siblings;
};


// handling the functionality of nav bar on small screens
const navToggle = document.querySelector('.nav-toggle-btn');
const navLinks = document.querySelector('nav .nav-links');

navToggle.addEventListener('click', (e) => {
  handleToggleClick(navToggle, navLinks);
});


// Change nav bar position do be fixed when user scroll
window.addEventListener('scroll', event => {
  const navBar = document.querySelector('.main-nav');
  if(window.scrollY > navBar.clientHeight) {
    navBar.classList.add('nav-scrolled');
  } else {
    navBar.classList.remove('nav-scrolled');
  }
});



// change the display property of the shopping cart container if its clicked 
const navShoppingCart = document.querySelector('.shopping-cart img');
const shoppingCartHolder = document.getElementById('shoppingCartHolder');
const goToCartBtn = document.querySelector('.shoppingCart-btn');

navShoppingCart.addEventListener('click', (e) => {
  shoppingCartHolder.classList.toggle('display-block');
});
goToCartBtn.addEventListener('click', event => {
  event.preventDefault();
  alert('This feature still in development process, Thanks for your understanding!')
});


// function call for packages shuffle based on tags (imported from packges.js)
const tagsArray = [...document.querySelectorAll('.tag')];
const bouquetsArray = [...document.querySelectorAll('.bouquet')];

packgesShuffle(tagsArray, bouquetsArray);


// Contact us form validation
const contactForm = document.querySelector('#contactUs');

contactForm.addEventListener('submit', event => {
  event.preventDefault()
  var numbers = /^[0-9]+$/;
  const fullName = contactForm.querySelector("input[name='fullName']");
  const telephone = contactForm.querySelector("input[name='telephone']");
  const inquery = contactForm.querySelector("select[name='inquery']");

  if(fullName.value.match(numbers)){
    alert('Please enter a valid full name!')
  } else if(!isNaN(parseFloat(fullName.value))) {
    alert('Please enter a valid full name!')
  }

  if(!(telephone.value.match(numbers))) {
    alert('Only positive numbers are accepted for TELEPHONE filed!')
  } else if(telephone.value.length <= 9 || telephone.value >= 15) {
    alert('Telephone number should be more than 9 elements and less than 15 elements!')
  }

  if(inquery.value === "selectSomething"){
    alert('Please select an inquery!')
  }
});


// change nav links color on click
const allNavLinks = document.querySelectorAll('.nav-item a');
allNavLinks.forEach(link => {
  link.addEventListener('click', e => {
    link.classList.add('active');
    let siblings = getSiblings(link.parentNode);
    siblings.forEach(sibling => {
      sibling.firstChild.classList.remove('active');
    });
  });
});


// prevent draggable attr for all imgs 
document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', false));

// prevent default behaviour for subscribe email btn 
const subscribeBtn = document.querySelector('.subscribe-form__btn');
subscribeBtn.addEventListener('submit', event => {
  event.preventDefault;
  alert('Thanks for your subsribtion!')
})