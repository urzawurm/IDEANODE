import Cart from '../models/Cart.js';

export const getShoppingCart = (req, res) => {
  Cart.find({userId: res.locals.user._id}).lean().then((carts) => {
    res.render('shoppingCart', {cartItems: carts})
  })
}

export const deleteShoppingCart = (req, res) => {
  Cart.deleteOne({userId: req.body.userId, productId: req.params.id}).then((item) =>{
    res.redirect('/shoppingCart');
    console.log("delete?", item)
  })
}

export const postShoppingCart = (req, res) => {
  
}