const exercise6 = () => {
  const fruit = { item: "🍑", price: 2 };
  const meat = { item: "🍖", price: 5 };
  const rice = { item: "🍚", price: 3 };

  // exercise: Rewrite the code below to be more 'functional' in the way to eliminate all side-effects
  // hint - maybe you don't necessarily need a class to solve this problem

  class ShoppingCart {
    items = [];
    constructor() {}

    add(item) {
      this.items.push(item);
    }

    calculateTotal() {
      return this.items.reduce((acc, cur) => cur.price + acc, 0);
    }
  }

  const shoppingCart = new ShoppingCart();
  shoppingCart.add(fruit);
  shoppingCart.add(meat);
  shoppingCart.add(rice);

  console.log(shoppingCart.calculateTotal());

  // end of exercise scope
};

module.exports = exercise6;
