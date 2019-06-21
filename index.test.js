const ShoppingCart = require('./index.js')

test('shopping cart has an empty list', () => {
  const cart = new ShoppingCart()
  expect(cart.items.length).toBe(0) 
})

test('shopping cart can add a new item', () => {
  const cart = new ShoppingCart()
  const item = { product: 'chocolate', price: 1, amount: 1 }
  cart.add(item)
  expect(cart.items[0]).toEqual(item)
})

test('shopping cart can add 2 items', () => {
  const cart = new ShoppingCart()
  const choco = { product: 'chocolate', price: 1, amount: 1 }
  const wine = { product: 'wine', price: 3, amount: 1 }
  cart.add(choco)
  cart.add(wine)
  expect(cart.items.length).toBe(2)
  expect(cart.items[0]).toBe(choco)
})

test('shopping cart can add multiple items', () => {
  const cart = new ShoppingCart()
  const items = [
    { product: 'chocolate', price: 1, amount: 1 },
    { product: 'wine', price: 3, amount: 1 },
    { product: 'cheese', price: 3, amount: 1 },
    { product: 'chair', price: 13, amount: 1 },
    { product: 'beer', price: 2, amount: 10 }
  ]
  items.forEach(item => cart.add(item))
  expect(cart.items.length).toBe(items.length)
})

test('shopping cart can remove item', () => {
  const cart = new ShoppingCart()
  const item = { product: 'chocolate', price: 1, amount: 1 }
  cart.add(item)
  cart.remove(item)
  expect(cart.items.length).toBe(0)
})

test('shopping cart can remove item', () => {
  const cart = new ShoppingCart()
  const choco = { product: 'chocolate', price: 1, amount: 1 }
  const wine = { product: 'wine', price: 3, amount: 1 }
  cart.add(choco)
  cart.add(wine)
  cart.remove(choco)
  expect(cart.items.length).toBe(1)
  expect(cart.items[0]).toEqual(wine)
})

test('shopping cart can remove multiple items', () => {
  const cart = new ShoppingCart()
  const choco = { product: 'chocolate', price: 1, amount: 1 }
  const chair = { product: 'chair', price: 13, amount: 1 }
  const items = [
    { product: 'wine', price: 3, amount: 1 },
    choco,
    { product: 'cheese', price: 3, amount: 1 },
    { product: 'beer', price: 2, amount: 10 },
    chair
  ]
  items.forEach(item => cart.add(item))
  cart.remove(choco)
  cart.remove(chair)
  expect(cart.items.length).toBe(3)
  expect(cart.items[0].product).toBe('wine')
  expect(cart.items[1].product).toBe('cheese')
  expect(cart.items[2].product).toBe('beer')
})

test('shopping cart should not remove anything when list empty', () => {
  const cart = new ShoppingCart()
  cart.remove({ product: 'bla' })
  expect(cart.items.length).toBe(0)
})

test('shopping cart returns 0 when no items available', () => {
  const cart = new ShoppingCart()
  expect(cart.total()).toBe(0)
})

test('shopping cart returns total for 3 items', () => {
  const cart = new ShoppingCart()
  const choco = { product: 'chocolate', price: 1, amount: 1 }
  const wine = { product: 'wine', price: 3, amount: 1 }
  const beer = { product: 'beer', price: 1, amount: 10 }
  cart.add(choco)
  cart.add(wine)
  cart.add(beer)
  expect(cart.total()).toBe(14)
})
