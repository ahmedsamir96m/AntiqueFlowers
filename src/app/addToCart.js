import bouquets from './bouquetsData';

// IIFE for handling all of the shopping cart functionalies
export default (function createShoppingCartItems() {
  // all the add to cart btns, the shopping cart items container, the total price of cart items
  const addToCartBtns = Array.from(document.querySelectorAll('.add-to-cart'));
  const shoppingCartItemsContainer = document.getElementById('shoppingCartHolder');
  const totalPrice = document.querySelector('.shoppingCart-total span');
  let shoppingCartItemsTotal = [];
  
  // loop through all the add to cart btns
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      // on click, check the clicked btn data-attr, pick the correct bouquet from the 
      // bouquets stored data based on this data-attr
      const shoppingCartCounter = document.querySelector('.shopping-cart');
      let clickedItemID = parseInt(btn.getAttribute('data-num'));
      const product = bouquets[clickedItemID];
      // create the required HTML for the cart item
      const clickedItemHTML = document.createElement('div');
      clickedItemHTML.classList.add('shoppingCart-item');
      clickedItemHTML.setAttribute('data-id', product.id);
      clickedItemHTML.innerHTML = `
        <img src="imgs/product${product.id + 1}.png" alt="${product.name} Image" width="50px">
        <h5>${product.name}</h5>
        <p class="color-primary">$${product.price}</p>
        <button class="shoppingCart-item__remove btn btn-remove" data-remove="${product.id}"><i class="fas fa-trash"></i></button>
      `;
      // function to calc the total cart items 
      //(we use it to set data-attr then using this data-attr in css do display the number of the cart items)
      function shoppingItemsCounter() {
        return shoppingCartCounter.setAttribute('data-itemsincart' , shoppingCartItemsContainer.childElementCount - 3);
      };

      shoppingItemsCounter();
      // insert the created item (html) to the DOM in its container
      shoppingCartItemsContainer.insertBefore(clickedItemHTML ,document.querySelector('.shoppingCart-hr'));
      shoppingCartItemsTotal.push(parseFloat((product.price).toFixed(2)));
      
      // clac the total price when adding a new items
      const price = shoppingCartItemsTotal.reduce((total, current) => {
        let totalAmount = total + current;
        return totalAmount;
      });
      totalPrice.textContent = `$${parseFloat(price).toFixed(2)}`; 

      // adding eventlistener to the shopping cart items remove buttons
      // adding the listener directly to the document because the required btn may havent been created yet
      document.addEventListener('click', event => {
        let removeBtns = document.querySelectorAll('.shoppingCart-item__remove');
        removeBtns.forEach(btn => {
          // for each btn we check if the target is equal to this btn or is equal to the trash-can icon
          // then remove the parent of the btn (the shopping cart item) from the DOM
          // then check the index of this item and remove it from the array of shopping cart items
          // then re-calc the total price 
          if(event.target === btn || event.target === btn.firstChild) {
            shoppingCartItemsContainer.removeChild(btn.parentElement);
            let index = shoppingCartItemsTotal.indexOf(parseFloat(btn.previousElementSibling.textContent.slice(1)));
            shoppingCartItemsTotal.splice(index, 1);
            if(shoppingCartItemsTotal.length >= 2) {
              const newtotalPrice = shoppingCartItemsTotal.reduce((total, current) => {
                let totalAmount = total + current;
                return totalAmount;
              });
              totalPrice.textContent = `$${parseFloat(newtotalPrice).toFixed(2)}`; 
            } else if (shoppingCartItemsTotal.length === 1) {
              totalPrice.textContent = `$${shoppingCartItemsTotal[0]}`
            } else {
              totalPrice.textContent = `$${0}`
            }
          }
          shoppingItemsCounter();
        })
      }) 
    });   
  });

})();
