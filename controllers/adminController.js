import Product from "../models/Product.js"
import ProductBasicInfos from "../models/ProductBasicInfo.js";

export const getUpdateAdmin = (req, res) => {
  ProductBasicInfos.find({}).then(item => {
    res.render("updateAdmin", {items: item});
  })
}

export const getAdmin = (req, res) => {
  res.render("admin");
}

export const postAdmin =(req, res)=>{ 
  ProductBasicInfos.findOne({productId: req.body.productId}).then((product)=>{
    if (product) {
      req.flash("error_msg", "Item have existed !!")
      res.redirect('/admin')
    } else {
      new ProductBasicInfos({
        productId: req.body.productId,
        productName: req.body.productName,
        type: req.body.type,
      }).save().then(() => {
        res.redirect('/admin/update');
      })
    }
  })
}
export const postUpdateAdmin =(req, res)=>{ 
  Product.findOne({productId: req.body.productId}).then((product)=>{
    if (product) {
      product.qty = product.qty + new Number(req.body.qty);
      product.save().then(() => {
        res.redirect('/admin');
      })

    } else {
      new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        qty: Number(req.body.qty),
        type: req.body.type,
        price: Number(req.body.price)
      }).save().then(() => {
        res.redirect('/admin');
      })
    }
  })
}

export const getWarehouse = (req, res) => {
  Product.find({}).lean().sort({ productId: "asc" }).then((record)=>{
      res.render("warehouse", { allRecord: record});
  });
}

export const deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
  .then(()=>{
    res.redirect("/admin/warehouse")
  }).catch((err) => {
    console.log(err);
  })
}

export const updateProduct = (req, res) => {
  Product.findOne({_id:req.params.id}).then((record)=> {
    record.qty = Number(req.body.qty); 
    record.price = Number(req.body.price);
    record.save().then(()=>{
      res.redirect("/admin/warehouse");
    }).catch((err) => {
      console.log(err);
    })
  });
}

export const getEditProduct = (req, res) => {
  Product.findOne({_id: req.params.id}).lean().then((item) =>{
    res.render('editWarehouse', {warehouseItem: item})
  })
}
