import Cart from '../models/Cart.js';

export const getShoppingCart = (req, res) => {
  Cart.find({userId: res.locals.user._id}).lean().then((carts) => {
    res.render('shoppingCart', {cartItems: carts})
  })
}