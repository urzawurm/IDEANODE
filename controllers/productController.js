import Product from "../models/Product.js";


export const getProduct = (req, res) => {
  let obj = {};
  let arr = [];
    Product.find({}).lean().then((product) => {
    // console.log('product',product);
    product.map((item,index) => {
    if(!arr.includes(item.productName)) {
      arr.push(item.productName);
    }
    })
    
    arr.map(item => {
      let idArr = [];
      let priceArr = [];
      let typeArr = [];
      product.map(value =>  {
        if(value.productName === item) {
          idArr.push(value.productId);
          priceArr.push(value.price);
          typeArr.push(value.type);
        }
      })
      obj[item] = {name: item, id: idArr, price: priceArr, type: typeArr }
    })
    console.log("obj???", obj)
        res.render('products', {allProduct: obj, auth: res.locals.user})
    })
} 
