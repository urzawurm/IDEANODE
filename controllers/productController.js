import Product from "../models/Product.js";

export const getProduct = (req, res) => {
    Product.find({}).lean().then((product) => {
      if (res.locals.user) {
        res.render('products', {allProduct: product})
      } else {
        res.render('noAuthProduct', {allProduct: product})
      }
    })
} 


