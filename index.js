var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var randomPrice
  
  getRandomIntInclusive(1,100);
  
  for(var i=0, l = cart.length; i<l; i++) {
    getRandomIntInclusive(1,100);
  }
  
  var itemName = [item];
  
  cart.push({itemName: [item], price: [randomInt]});
  
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
