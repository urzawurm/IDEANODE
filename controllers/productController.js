import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

export const getProduct = (req, res) => {
    Product.find({}).lean().then((product) => {
      if (res.locals.user) {
        res.render('products', {allProduct: product})
      } else {
        res.render('noAuthProduct', {allProduct: product})
      }
    })
} 

export const updateCarts = (req, res) => {
  console.log("?????", req.body)
  if (req.buy) {
    Product.findOne({productId: buy}).then((item) => {
    //   totalPrice = item.price * productNum;
    //   newCartItem = {
    //     userId: res.locals.user?._id,
    //     productId: item.productId,
    //     qty:productNum,
    //     price: totalPrice,
    //     type:item.type,
    //     productNum: item.productName,
    //     productName: item.productName
    //   }
    //   new Cart(newCartItem).save().then(() => {
    //     req.flash("success_msg", "added to carts!");
    //     res.render('confirm', {allRecord: item})
    // })
  })
} else {
  
  const {productId, productNum} = req.body;
  let newCartItem;
  let totalPrice;
  if (!productNum) {
    req.flash("error_msg","Please Input Amount");
    res.redirect('/products')
    return
  }
  Product.findOne({productId: productId}).then((item) => {
    totalPrice = item.price * productNum;
    newCartItem = {
      userId: res.locals.user?._id,
      productId: item.productId,
      qty:productNum,
      price: totalPrice,
      type:item.type,
      productNum: item.productName,
      productName: item.productName
    }
  
    Cart.findOne({productId: productId, userId: res.locals.user?._id}).then((item) => {
      if (item) {
        item.price = item.price + totalPrice
        item.qty = item.qty + Number(productNum);
        Cart(item).save().then(() => {
          req.flash("success_msg", "added to carts!");
          res.redirect('/products')
        })
      }  else {
        new Cart(newCartItem).save().then(() => {
          req.flash("success_msg", "added to carts!");
          res.redirect('/products')
      })
      }
    })
  })
}
}
