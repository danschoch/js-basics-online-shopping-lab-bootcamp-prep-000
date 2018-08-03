var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
var randomPrice = getRandomIntInclusive(1,100);
console.log(randomPrice);

function addToCart(item) {
  
  var randomPrice = getRandomIntInclusive(1,100);
  
  var itemName = [item];
  
  cart.push({itemName: [item], price: [randomPrice]});
  
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
