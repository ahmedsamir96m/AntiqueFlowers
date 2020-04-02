import bouquets from './bouquetsData';

export default function createShoppingCartItems() {
  let shoppingCartHolder = document.getElementById('shoppingCartHolder');

  class CreateShoppingCartItem {
    constructor(item) {
      this.id = item.id;
      this.name = item.name;
      this.image = item.image;
      this.price = item.price;
      item.sale ? this.sale = 'Yes' : this.sale = 'No';
    }

    renderShoppingCartItem(newItem) {
      newItem.innerHtml = `
        <h4>${this.name}</h4>
      `;
    }
  }

  let shoppingCart = [];

  let clickedItemBtns = Array.from(document.querySelectorAll('.add-to-cart'));

  clickedItemBtns.forEach(btn =>  {
    btn.addEventListener('click', e => {
      let dataNum = parseInt(btn.getAttribute('data-num'));
      let bouquet = bouquets[dataNum];
      if(dataNum === bouquet.id) {
        shoppingCart.push(bouquet);
        shoppingCart.map(item => {
          if(item.id === bouquet.id) {
            let cartItem = new CreateShoppingCartItem(item);
  
            let newCartItem = document.createElement('div');
            newCartItem.classList.add('shoppingCart-item');
            newCartItem.innerHTML = `
              <img src="imgs/product${cartItem.id + 1}.png" alt="Image of ${cartItem.name} in the shopping cart" width="50px"/>
              <h5>${cartItem.name}</h5>
              <p>Price: ${cartItem.price}</p>
            `;      

            shoppingCartHolder.appendChild(newCartItem);
          }
        });
      }
    })
  });

};