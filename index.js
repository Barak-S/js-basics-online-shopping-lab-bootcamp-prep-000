var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min
 
  var objecto = {
     itemName: item,
     itemPrice: random
   }
   
   cart.push(objecto)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
 
   
  } else if (cart.length === 1){
   
    return `In your cart, you have ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  } else if (cart.length > 1){
    var cartItems = []
   
   var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
   
    for(var i = 0; i < cart.length - 1; i++){
       cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
  }
}

function total() {
  let totalPrice =0;
  for (i=0;i<cart.length;i++){
    totalPrice += cart[i].itemPrice;
  }
  return `Your total is ${totalPrice}`
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
}
}

function placeOrder(cardNumber) {
  // write your code here
}
