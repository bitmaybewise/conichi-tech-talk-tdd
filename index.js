module.exports = class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item)
  }

  remove(item) {
    this.items = this.items.filter(i => i.product !== item.product)
  }

  total() {
    return this.items.reduce((acc, item) => acc = acc + (item.price * item.amount), 0)
  }
}
