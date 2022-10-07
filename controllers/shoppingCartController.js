import Cart from '../models/Cart.js';
import purchaseRecord from '../models/purchaseRecord.js';

export const getShoppingCart = (req, res) => {
  Cart.find({userId: res.locals.user._id}).lean().then((carts) => {
    res.render('shoppingCart', {cartItems: carts})
  })
}

export const deleteShoppingCart = (req, res) => {
  console.log("in?", req.body)

  Cart.deleteOne({userId: req.body.userId, productId: req.params.id}).then((item) =>{
    console.log("delete?", item)
    res.redirect('/shoppingCart');
  }).catch((err) => {
    console.log("dele err?", err)
  })
}

export const postShoppingCart = (req, res) => {
  console.log("postCart", req.body)
  const { productName, qty, totalPrice, userName, userAddress, shipMethod, finalAmount } = req.body;
  let newFinalAmount = Number(finalAmount) + Number(shipMethod);
  new purchaseRecord({
    userId: res.locals.user._id,
    userName: userName,
    userAddress: userAddress,
    // productId: 
    qty: qty,
    price: totalPrice,
    shipMethod: shipMethod,
    finalFee: newFinalAmount,
    productName: productName
  }).save().then((item) => {
    if (item) {
      Cart.deleteMany({userId: res.locals.user._id}).then((QAQ) => {
        res.redirect("/shoppingCart")
      })
    }
  })
}

export const getConfirmCart = (req, res) => {
  const shipMethod = {
    0:{
      name: 'cash on delivery',
      amount: 60
    },
    1: {
      name: "in-store pickup",
      amount: 0
    }
  }
  Cart.find({userId: res.locals.user._id}).lean().then((item) => {
    let totalPrice = 0;
    let totalAmount = 0;

    if (item.length) {
      for(let i = 0; i< item.length; i++) {
        console.log("item?", item[i])
        totalAmount = totalAmount + Number(item[i].price);
        item[i].totalPrice = totalPrice
      }

      item.name = res.locals.user.name
      res.render('confirm', {allRecord: item, name: res.locals.user.name, shipMethod: shipMethod, address: res.locals.user.address, totalAmount: totalAmount});
    } else {
      req.flash("You don't have any record")
      res.redirect('/products')
    }
  })
}
