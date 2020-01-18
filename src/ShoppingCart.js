/**
 * Note to teacher: 
 * In the test file i had to use a few curly braces to passed the test. ( i made comments in shoppingcart.spec.js to point out were i made the changes. )
 * Probably i am doing something wrong. Can we talk about it next monday. 
 */
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    const result = {};
    result.name = itemName;
    result.quantity = quantity;
    result.pricePerUnit = price;
    this.items.push(result);
  }
  clear() {
    this.items = [];
  }
  total() {
    return this.items.reduce((acc, cv)=> acc + cv.quantity*cv.pricePerUnit, 0)
  }
}

module.exports = ShoppingCart;
