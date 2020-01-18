const {ShoppingCart} = require("./ShoppingCart");

const cart = new ShoppingCart;

console.log("Is the cart an Empty Array", cart.getItems());
// console.log(cart.addItem("trashcan", 2, 1))
console.log("add some items to the cart")
cart.addItem("item 1", 1, 15.5)
cart.addItem("item 2", 2, 3)
cart.addItem("item 3", 10, 2)
cart.addItem("item 4", 0, 2)
cart.addItem("item 5", 2, 0)
console.log("check if the cart has 5 items in it", cart.items.length)
// console.log("Execute.clear():", cart.clear())
// console.log("is the array cleared?:", cart)
console.log("Total value of shoppingcart", cart.total());