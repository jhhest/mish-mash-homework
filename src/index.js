const groupAdultsByAgeRange = require("./transform");

const examplePeopleData = [
    // { name: "pete", age: 10 },
    // { name: "dove", age: 17 },
    // { name: "dave", age: 18 },
    // { name: "hall", age: 19 },
    // { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ];

console.log(groupAdultsByAgeRange(examplePeopleData))

/**
 * Create a new ShoppinCart object named cart. 
 * Used console.log for "Check yourself before you wreck yourself."
 */

// const {ShoppingCart} = require("./ShoppingCart");
// const cart = new ShoppingCart;

// console.log("Is the cart an Empty Array", cart.getItems());
// console.log(cart.addItem("trashcan", 2, 1))
// console.log("add some items to the cart")
// cart.addItem("item 1", 1, 15.5)
// cart.addItem("item 2", 2, 3)
// cart.addItem("item 3", 10, 2)
// cart.addItem("item 4", 0, 2)
// cart.addItem("item 5", 2, 0)
// console.log("check if the cart has 5 items in it", cart.items.length)
// console.log("Execute.clear():", cart.clear())
// console.log("is the array cleared?:", cart)
// console.log("Total value of shoppingcart", cart.total());